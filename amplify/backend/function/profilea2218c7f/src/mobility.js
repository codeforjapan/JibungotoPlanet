const { toComponent, findComponent, toEstimation } = require('./util')

module.exports.estimateMobility = async (
  dynamodb,
  mobilityAnswer,
  footprintTableName,
  parameterTableName
) => {
  // mobilityAnswerのスキーマと取りうる値は
  // amplify/backend/api/JibungotoPlanetGql/schema.graphql
  // を参照。

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
      const intensity = findComponent(
        baselines,
        'mobility',
        'private-car-driving',
        'intensity'
      )

      // 自家用車の場合は、自動車種類に応じて運転時GHG原単位を取得
      const params = {
        TableName: parameterTableName,
        Key: {
          category: 'car-intensity-factor',
          key: mobilityAnswer.privateCarType + '_driving-factor'
        }
      }
      let data = await dynamodb.get(params).promise()
      if (data?.Item) {
        intensity.value = data.Item.value
      }

      // 人数補正値
      const carPassengers = mobilityAnswer.carPassengers || 'unknown'
      params.Key = {
        category: 'car-passengers',
        key: carPassengers + '_private-car-factor'
      }
      data = await dynamodb.get(params).promise()
      const ratio = data?.Item?.value || 1

      console.log('private-car-driving-intensity = ' + intensity.value)
      console.log(
        'carPassengers = ' + carPassengers + ', private-car-factor = ' + ratio
      )

      // TODO: PHV, EVの場合は自宅での充電割合と再生エネルギー電力の割合で補正が必要。
      intensity.value = intensity.value * ratio

      console.log(
        'private-car-driving-intensity after car passenger adjustment  = ' +
          intensity.value
      )

      estimations.push(toEstimation(intensity))

      // 自家用車の移動距離を取得
      const amount = findComponent(
        baselines,
        'mobility',
        'private-car-driving',
        'amount'
      )
      amount.value = mobilityAnswer.privateCarAnnualMileage
      estimations.push(toEstimation(amount))

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
