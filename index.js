global.Promise = require('bluebird')

require('./library/database')
require('./library/cache')
require('./library/queue')
require('./library/random')

const Koa = require('koa')
const middlerware = require('./middleware')
const { Port, Env } = require('config')

const app = new Koa()

// 中间件
app.use(middlerware)

// 扩展 ctx 方法
require('./extend/koa')(app)

if (process.env.NODE_ENV !== 'test') {
  global.app = app.listen(Port, () => console.log(`运行端口: ${Port}\n运行环境: ${Env}`))
}

module.exports = global.app = app.listen()
