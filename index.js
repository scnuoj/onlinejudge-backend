import Wubi from 'wubi'
import jwt from 'koa-jwt'
import wubiSequelizeLoader from 'wubi-sequelize-loader'
import wubiServiceLoader from 'wubi-service-loader'

import sequelize from './library/database'
import './library/cache'
import './library/queue'
import onerror from './middleware/onerror'

Wubi.inject(wubiSequelizeLoader(sequelize))
Wubi.inject(wubiServiceLoader())

const JwtConfig = require('conenv')(require('config').Jwt)
const app = new Wubi()

app.use(onerror())

app.use(jwt({
  secret: JwtConfig.secret,
  algorithm: JwtConfig.algorithm,
  passthrough: true
}))

app.startRoute()

app.listen(8000)

export default app
