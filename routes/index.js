const Router = require('koa-router')
const Problems = require('./problems')

const api = new Router({
  prefix: '/api'
})

api.use('/problems', Problems.routes(), Problems.allowedMethods())

module.exports = api
