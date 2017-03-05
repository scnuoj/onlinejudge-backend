global.Promise = require('bluebird')

require('./libraries/Database')

const Koa = require('koa')
const middlerwares = require('./middlewares')
const router = require('./routes/index.js')

const Port = require('config').get('Port')
const Env = require('config').get('Env')

const app = new Koa()

app.use(middlerwares)

app.use(router.routes())
   .use(router.allowedMethods())

module.exports = app.listen(Port, () => console.log(`Server Run On Port: ${Port}\nEnviroment: ${Env}`))
