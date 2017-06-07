import * as Koa from 'koa'
import * as logger from 'koa-logger'
import * as config from 'config'
import * as jwt from 'koa-jwt'
import { useKoaServer } from 'routing-controllers'
import db from './library/database'
import onerror from './middleware/onerror'

db.authenticate().then(() => {

  const jwtConfig = config.get('Jwt') as any

  const app = new Koa()

  app.use(onerror())
  app.use(logger())
  app.use(jwt({
    secret: jwtConfig.secret,
    passthrough: true
  }))

  useKoaServer(app, {
    controllers: [__dirname + '/controller/*{js,ts}']
  })

  app.listen(8000, () => console.log('listening'))
})
