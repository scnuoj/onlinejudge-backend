const Router = require('koa-router')
const Problems = require('./problems')
const Problem = require('./problem')
const Submission = require('./submission')
const User = require('./user')

const api = new Router({
  prefix: '/api'
})

api.use('/problems', Problems.routes(), Problems.allowedMethods())
api.use('/problem', Problem.routes(), Problem.allowedMethods())
api.use('/submission', Submission.routes(), Submission.allowedMethods())
api.use('/user', User.routes(), User.allowedMethods())

module.exports = api
