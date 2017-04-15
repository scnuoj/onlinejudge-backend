const cors = require('kcors')
const logger = require('koa-logger')
const compose = require('koa-compose')
const response = require('./response')

module.exports = compose([
  response(),
  cors(),
  logger()
])
