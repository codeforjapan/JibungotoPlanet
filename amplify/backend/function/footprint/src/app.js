/*
Copyright 2017 - 2017 Amazon.com, Inc. or its affiliates. All Rights Reserved.
Licensed under the Apache License, Version 2.0 (the "License"). You may not use this file except in compliance with the License. A copy of the License is located at
    http://aws.amazon.com/apache2.0/
or in the "license" file accompanying this file. This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and limitations under the License.
*/

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

const AWS = require('aws-sdk')
const awsServerlessExpressMiddleware = require('aws-serverless-express/middleware')
const bodyParser = require('body-parser')
const express = require('express')

AWS.config.update({ region: process.env.TABLE_REGION })

let dynamoParam = {}
let tableName = 'Footprint-dikfjlx7xncgpo5s3xzv5x56ie'
if (process.env.ENV && process.env.ENV !== 'NONE') {
  tableName = tableName + '-' + process.env.ENV
}

if (
  'AWS_EXECUTION_ENV' in process.env &&
  process.env.AWS_EXECUTION_ENV.endsWith('-mock')
) {
  // for local mock
  dynamoParam = {
    endpoint: 'http://localhost:62224',
    region: 'us-fake-1',
    accessKeyId: 'fake',
    secretAccessKey: 'fake'
  }
  tableName = 'FootprintTable'
}

const dynamodb = new AWS.DynamoDB.DocumentClient(dynamoParam)

const userIdPresent = false // TODO: update in case is required to use that definition
const partitionKeyName = 'dirAndDomain'
const partitionKeyType = 'String'

const sortKeyName = 'itemAndType'
const sortKeyType = 'String'

const hasSortKey = sortKeyName !== ''
const path = '/footprints'
const UNAUTH = 'UNAUTH'
const hashKeyPath = '/:' + partitionKeyName
const sortKeyPath = hasSortKey ? '/:' + sortKeyName : ''

// declare a new express app
const app = express()
app.use(bodyParser.json())
app.use(awsServerlessExpressMiddleware.eventContext())

// Enable CORS for all methods
app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', '*')
  next()
})

// convert url string param to expected Type
const convertUrlType = (param, type) => {
  switch (type) {
    case 'N':
      return Number.parseInt(param)
    default:
      return param
  }
}

/********************************
 * HTTP Get method for list objects *
 ********************************/

app.get(path + '/:dir/:domain', async (req, res) => {
  const dir = req.params.dir
  const domain = req.params.domain

  const params = {
    TableName: tableName,
    KeyConditions: {
      dirAndDomain: {
        ComparisonOperator: 'EQ',
        AttributeValueList: [dir + '_' + domain]
      }
    }
  }

  try {
    const data = await dynamodb.query(params).promise()
    res.json(data.Items.map((item) => toComponent(item)))
  } catch (err) {
    res.statusCode = 500
    res.json({ error: 'Could not load items: ' + err })
  }
})

/*****************************************
 * HTTP Get method for get single object *
 *****************************************/

app.get(path + '/:dir/:domain/:item/:type', async (req, res) => {
  const dir = req.params.dir
  const domain = req.params.domain
  const item = req.params.item
  const type = req.params.type

  const params = {
    TableName: tableName,
    Key: {
      dirAndDomain: dir + '_' + domain,
      itemAndType: item + '_' + type
    }
  }

  try {
    const data = await dynamodb.get(params).promise()
    res.json(toComponent(data.Item))
  } catch (err) {
    res.statusCode = 500
    res.json({ error: 'Could not load items: ' + err.message })
  }
})

app.listen(3000, function () {
  console.log('App started')
})

// Export the app object. When executing the application local this does nothing. However,
// to port it to AWS Lambda we will create a wrapper around that will load the app from
// this file
module.exports = app
