import Leibniz from 'leibniz'
import jwt from 'koa-jwt'

import './library/cache'
import './library/queue'
import onerror from './middleware/onerror'

const app = new Leibniz()

app.use(onerror())

const JwtConfig = require('conenv')(require('config').Jwt)

app.use(jwt({
  secret: JwtConfig.secret,
  algorithm: JwtConfig.algorithm,
  passthrough: true
}))

app.listen(8000)

export default app
