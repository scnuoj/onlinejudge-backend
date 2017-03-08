const Router = require('koa-router')
const Problems = require('./problems')
const Problem = require('./problem')

const api = new Router({
  prefix: '/api'
})

api.use('/problems', Problems.routes(), Problems.allowedMethods())
api.use('/problem', Problem.routes(), Problem.allowedMethods())

module.exports = api
