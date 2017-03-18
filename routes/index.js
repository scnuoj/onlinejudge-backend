const Router = require('koa-router')
const Problem = require('./problem')
const Submission = require('./submission')
const User = require('./user')

const api = new Router({
  prefix: '/api/v1'
})

api.use('/problems', Problem.middleware())
api.use('/submissions', Submission.middleware())
api.use('/users', User.middleware())

module.exports = api
