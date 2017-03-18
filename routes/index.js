const Router = require('koa-router')
const Problem = require('./problem')
const Submission = require('./submission')
const User = require('./user')
const Auth = require('./auth')

const api = new Router({
  prefix: '/api'
})

api.use('/auth', Auth.middleware())
api.use('/problems', Problem.middleware())
api.use('/submissions', Submission.middleware())
api.use('/users', User.middleware())

module.exports = api
