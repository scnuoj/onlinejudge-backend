const Router = require('koa-router')
const Problem = require('./problem')

const api = new Router({
  prefix: '/api'
})

api.use('/problem', Problem.routes(), Problem.allowedMethods())

module.exports = api
