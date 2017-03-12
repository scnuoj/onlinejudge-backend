const Router = require('koa-router')
const Problem = require('./problem')
const Submission = require('./submission')
const User = require('./user')

const api = new Router({
  prefix: '/api'
})

api.use('/problems', Problem.routes(), Problem.allowedMethods())
api.use('/submissions', Submission.routes(), Submission.allowedMethods())
api.use('/users', User.routes(), User.allowedMethods())

module.exports = api
