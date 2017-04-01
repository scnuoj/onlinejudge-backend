const Router = require('koa-router')

const Problem = require('./problem')
const Submission = require('./submission')
const User = require('./user')
const Contest = require('./contest')
const Managerment = require('./managerment')
const Post = require('./post')
const Discussion = require('./Discussion')
const Authentication = require('../middlewares/authentication')

const api = new Router({
  prefix: '/api'
})

api.use('/v1/problems', Problem.middleware())
api.use('/v1/submissions', Submission.middleware())
api.use('/v1/users', User.middleware())
api.use('/v1/contests', Contest.middleware())
api.use('/v1/posts', Post.middleware())
api.use('/v1/Discussions', Discussion.middleware())

api.use('/v6', Authentication(), Managerment.middleware())

module.exports = api
