import * as config from 'config'
import * as Koa from 'koa'
import * as jwt from 'koa-jwt'
import * as logger from 'koa-logger'
import 'reflect-metadata'
import { useKoaServer } from 'routing-controllers'
import onerror from './middleware/onerror'

const app = new Koa()

const jwtConfig = config.get('Jwt') as any

app.use(onerror())

app.use(logger())

app.use(jwt({
  secret: jwtConfig.secret,
  passthrough: true
}))

useKoaServer(app, {
  cors: true,
  controllers: [__dirname + '/controller/*{js,ts}']
})

export default app
