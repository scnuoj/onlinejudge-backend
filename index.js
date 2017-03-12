global.Promise = require('bluebird')

require('./libraries/Database')
require('./libraries/Queue')

const Koa = require('koa')
const middlerwares = require('./middlewares')
const router = require('./routes/index')

const Port = require('config').get('Port')
const Env = require('config').get('Env')

const app = new Koa()

app.use(middlerwares)

app.use(router.routes())
   .use(router.allowedMethods())

module.exports = app.listen(Port, () => console.log(`运行端口: ${Port}\n运行环境: ${Env}`))
