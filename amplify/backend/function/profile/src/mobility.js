module.exports.estimateMobility = async (
  dynamodb,
  mobilityAnswer,
  footprintTableName,
  parameterTableName
) => {
  // answerのデータイメージは下記（Typescript化時に型を定義しましょう・・・）、
  //
  //{
  //  "domain": "mobility"
  //  "hasPrivateCar": true,
  //  "privateCarType": "gas-vehicle",
  //  "privateCarAnnualMileage": 5000,
  //  "carCharging": "charge-almost-at-home",
  //  "carPassengers": "one",
  //  "train": 100,
  //  "trainUnit": "km/week",
  //  "bus": 100,
  //  "busUnit": "km/week",
  //  "motorbike": 100,
  //  "motorbikeUnit": "km/week",
  //  "airplane": 100,
  //  "airplaneUnit": "km/year",
  //  "otherCar": 100,
  //  "otherCarUnit": "km/week",
  //  "ferry": 100,
  //  "ferryUnit": "km/week"
  //}
  //

  let estimations = []

  // ベースラインのフットプリントを取得
  const params = {
    TableName: footprintTableName,
    KeyConditions: {
      dirAndDomain: {
        ComparisonOperator: 'EQ',
        AttributeValueList: ['baseline_mobility']
      }
    }
  }

  const data = await dynamodb.query(params).promise()
  const baselines = data.Items.map((item) => toComponent(item))

  // 回答がない場合はベースラインのみ返す
  if (!mobilityAnswer) {
    return { baselines, estimations }
  }

  // 答えに従ってestimationを計算
  if (mobilityAnswer.hasPrivateCar) {
    if (mobilityAnswer.privateCarType) {
      // 自家用車の場合は、自動車種類に応じて運転時GHG原単位を取得
      {
        const params = {
          TableName: parameterTableName,
          Key: {
            category: 'car-footprint',
            key: mobilityAnswer.privateCarType + '_driving-ghg-intensity'
          }
        }
        let data = await dynamodb.get(params).promise()
        const intensity = toItem(
          baselines,
          'mobility',
          'private-car-driving',
          'intensity'
        )

        // 人数補正値
        const carPassengers = mobilityAnswer.carPassengers || 'unknown'
        params.Key = {
          category: 'car-passengers',
          key:
            carPassengers +
            '_private-car-ghg-intensity-ratio-to-national-average'
        }
        data = await dynamodb.get(params).promise()
        const ratio = data?.Item?.value || 1

        console.log('ratio = ' + ratio)

        // TODO: PHV, EVの場合は自宅での充電割合と再生エネルギー電力の割合で補正が必要。
        intensity.value = data.Item.value * ratio
        estimations.push(intensity)
      }
      // 自家用車の移動距離を取得
      {
        const amount = toItem(
          baselines,
          'mobility',
          'private-car-driving',
          'amount'
        )
        amount.value = mobilityAnswer.privateCarAnnualMileage
        estimations.push(amount)
      }

      // TODO: 以下、未実装
      // --- per week ---
      // train
      // bus
      // taxi
      // motorbike

      // --- per year ---
      // airplane
      // train
      // express bus
      // motorbike
      // ferry
    }
  }

  console.log(JSON.stringify(estimations))

  return { baselines, estimations }
}

const toItem = (baselines, domain, item, type) => {
  const fi = baselines.find(
    (bl) => bl.domain === domain && bl.item === item && bl.type === type
  )
  return {
    domain: fi.domain,
    item: fi.item,
    type: fi.type,
    value: fi.value,
    unit: fi.unit
  }
}

const toComponent = (item) => {
  const dirAndDomain = item.dirAndDomain.split('_')
  const itemAndType = item.itemAndType.split('_')
  return {
    dir: dirAndDomain[0],
    domain: dirAndDomain[1],
    item: itemAndType[0],
    type: itemAndType[1],
    value: item.value,
    unit: item.unit,
    citation: item.citation
  }
}
