/*
Copyright 2017 - 2017 Amazon.com, Inc. or its affiliates. All Rights Reserved.
Licensed under the Apache License, Version 2.0 (the "License"). You may not use this file except in compliance with the License. A copy of the License is located at
    http://aws.amazon.com/apache2.0/
or in the "license" file accompanying this file. This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and limitations under the License.
*/

const { estimateMobility } = require('./mobility')
const AWS = require('aws-sdk')
const awsServerlessExpressMiddleware = require('aws-serverless-express/middleware')
const bodyParser = require('body-parser')
const express = require('express')
const { default: next } = require('next')
const { v4: uuid } = require('uuid')
const shortid = require('shortid')

AWS.config.update({ region: process.env.TABLE_REGION })

let dynamoParam = {}
let footprintTableName = 'Footprint-dikfjlx7xncgpo5s3xzv5x56ie'
let parameterTableName = 'Parameter-dikfjlx7xncgpo5s3xzv5x56ie'
let profileTableName = 'Profile-dikfjlx7xncgpo5s3xzv5x56ie'
if (process.env.ENV && process.env.ENV !== 'NONE') {
  footprintTableName = footprintTableName + '-' + process.env.ENV
  parameterTableName = parameterTableName + '-' + process.env.ENV
  profileTableName = profileTableName + '-' + process.env.ENV
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
  footprintTableName = 'FootprintTable'
  parameterTableName = 'ParameterTable'
  profileTableName = 'ProfileTable'
}

const dynamodb = new AWS.DynamoDB.DocumentClient(dynamoParam)

const path = '/profiles'

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
    TableName: profileTableName,
    IndexName: 'profilesByRefId',
    KeyConditionExpression: 'refId = :refId',
    ExpressionAttributeValues: { ':refId': id }
  }

  try {
    const data = await dynamodb.query(params).promise()
    const profile = data.Items[0]
    if (profile) {
      profile.id = undefined
      res.json(profile)
    } else {
      res.json({})
    }
  } catch (err) {
    res.statusCode = 500
    res.json({ error: 'Could not load item: ' + err })
  }
})

/************************************
 * HTTP put method for insert object *
 *************************************/

app.put(path + '/:id', async (req, res) => {
  const id = req.params.id
  try {
    let params = {
      TableName: profileTableName,
      Key: { id }
    }
    let data = await dynamodb.get(params).promise()
    const profile = data.Item
    const mobilityAnswer = req.body.mobilityAnswer

    const { baselines, estimations } = await estimateMobility(
      dynamodb,
      mobilityAnswer,
      footprintTableName,
      parameterTableName
    )

    profile.mobilityAnswer = mobilityAnswer
    profile.baselines = baselines
    profile.estimations = estimations
    profile.updatedAt = new Date().toISOString()

    params = {
      TableName: profileTableName,
      Item: profile
    }
    data = await dynamodb.put(params).promise()
    res.json({ success: 'put call succeed!', url: req.url, data: profile })
  } catch (err) {
    res.statusCode = 500
    res.json({ error: 'Could not load items: ' + err })
  }
})

/************************************
 * HTTP post method for insert object *
 *************************************/

app.post(path, async (req, res) => {
  try {
    const mobilityAnswer = req.body.mobilityAnswer

    const { baselines, estimations } = await estimateMobility(
      dynamodb,
      mobilityAnswer,
      footprintTableName,
      parameterTableName
    )

    const profile = {
      id: uuid(),
      refId: shortid.generate(),
      mobilityAnswer,
      baselines,
      estimations,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    }

    const params = {
      TableName: profileTableName,
      Item: profile
    }
    const data = await dynamodb.put(params).promise()

    console.log(JSON.stringify(data))

    res.json({ success: 'post call succeed!', url: req.url, data: profile })
  } catch (err) {
    res.statusCode = 500
    res.json({ error: err, url: req.url, body: req.body })
  }
})

app.listen(3000, function () {
  console.log('App started')
})

// Export the app object. When executing the application local this does nothing. However,
// to port it to AWS Lambda we will create a wrapper around that will load the app from
// this file
module.exports = app
