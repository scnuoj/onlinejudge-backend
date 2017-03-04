global.Promise = require('bluebird')

require('./library/Database')

const Koa = require('koa')
const middlerwares = require('./middlewares')
const router = require('./routes/index.js')

const app = new Koa()

app.use(middlerwares)

app.use(router.routes())
   .use(router.allowedMethods())

app.listen(8000)

module.exports = app
