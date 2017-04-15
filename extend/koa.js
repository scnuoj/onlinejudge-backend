const JwtConfig = require('config').get('Jwt')
const services = require('require-dir')('../service', { recurse: true })
const routes = require('require-dir')('../route', { recurse: true })
const Service = require('./service')
const Router = require('koa-router')
const jwt = require('koa-jwt')

const API_PREFIX = '/v1'

// 扩展 Koa Context 方法
module.exports = function (app) {
  /**
   * 快速设置 ctx.body
   * @param {*} data 数据
   * @param {*} message 消息
   */
  app.context.ok = function (data, message) {
    this.body = { success: true, data, message }
  }

  /**
   * 快速设置 ctx.body
   * @param {*} data 数据
   * @param {*} message 消息
   */
  app.context.error = function (data, message) {
    this.status = 400
    this.body = { success: false, data, message }
  }

  /**
   * 在 ctx.service 上绑定全部 services
   * 两层 service
   */
  app.context.service = services
  Object.keys(services).forEach(serviceName => {
    if (typeof services[serviceName] === 'function') {
      app.context.service[serviceName] = new (services[serviceName](Service))()
    } else {
      Object.keys(services[serviceName]).forEach(deepServiceName => {
        if (typeof services[serviceName][deepServiceName] === 'function') {
          app.context.service[serviceName][deepServiceName] = new (services[serviceName][deepServiceName](Service))()
        }
      })
    }
  })

  /**
   * 使用 JWT 鉴权
   */
  app.use(jwt({
    secret: JwtConfig.secret,
    algorithm: JwtConfig.algorithm,
    passthrough: true
  }))

  /**
   * 自动注入路由
   */
  Object.keys(routes).forEach(routeName => {
    if (routes[routeName].middleware) {
      routes[routeName].prefix(API_PREFIX + '/' + routeName)
      app.use(routes[routeName].middleware())
    } else {
      Object.keys(routes[routeName]).forEach(secondRouteName => {
        routes[routeName][secondRouteName].prefix(API_PREFIX + '/' + routeName + '/' + secondRouteName)
        app.use(routes[routeName][secondRouteName].middleware())
      })
    }
  })
  const router = new Router({ prefix: API_PREFIX })
  Object.keys(routes).forEach(routeName => {

  })
  app.use(router.routes()).use(router.allowedMethods())

  return app
}
