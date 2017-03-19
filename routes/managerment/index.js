const Router = require('koa-router')

const Problem = require('./problem')

const api = new Router()

api.use('/problems', Problem.middleware())

module.exports = api
