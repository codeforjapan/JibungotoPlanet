/*
Copyright 2017 - 2017 Amazon.com, Inc. or its affiliates. All Rights Reserved.
Licensed under the Apache License, Version 2.0 (the "License"). You may not use this file except in compliance with the License. A copy of the License is located at
    http://aws.amazon.com/apache2.0/
or in the "license" file accompanying this file. This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and limitations under the License.
*/

const AWS = require('aws-sdk')
const awsServerlessExpressMiddleware = require('aws-serverless-express/middleware')
const bodyParser = require('body-parser')
const express = require('express')

AWS.config.update({ region: process.env.TABLE_REGION })

const suffix = '3uyvqum6jrc4pf63cde7njsxei'
let dynamoParam = {}
let tableName = 'Profile-' + suffix
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
  tableName = 'ProfileTable'
}

const dynamodb = new AWS.DynamoDB.DocumentClient(dynamoParam)

const path = '/shares'

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

/*****************************************
 * HTTP Get method for get single object *
 *****************************************/

app.get(path + '/:id', async (req, res) => {
  const id = req.params.id
  const params = {
    TableName: tableName,
    IndexName: 'profilesByShareId',
    KeyConditionExpression: 'shareId = :shareId',
    ExpressionAttributeValues: { ':shareId': id }
  }

  try {
    const data = await dynamodb.query(params).promise()
    const profile = data.Items[0]
    if (profile) {
      profile.id = undefined // idを削除
      profile.mobilityAnswer = undefined // 回答を削除
      res.json(profile)
    } else {
      res.json({})
    }
  } catch (err) {
    res.statusCode = 500
    res.json({ error: 'Could not load item: ' + err })
  }
})

app.listen(3000, function () {
  console.log('App started')
})

// Export the app object. When executing the application local this does nothing. However,
// to port it to AWS Lambda we will create a wrapper around that will load the app from
// this file
module.exports = app
