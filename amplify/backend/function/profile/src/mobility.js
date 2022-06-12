module.exports.estimateMobility = async (
  dynamodb,
  answer,
  profile,
  footprintTableName,
  parameterTableName,
  profileTableName,
  res
) => {
  console.log('here')

  const params = {
    TableName: footprintTableName,
    KeyConditions: {
      domainAndDir: {
        ComparisonOperator: 'EQ',
        AttributeValueList: ['mobility']
      }
    }
  }

  console.log(JSON.stringify(params))
  const data = await dynamodb.query(params).promise()
  data.Items.map((item) =>
    console.log(item.domainAndDir + ',' + item.itemAndType + ',' + item.value)
  )
}
