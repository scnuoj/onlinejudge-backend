import * as Koa from 'koa'
import * as config from 'config'
import * as jwt from 'koa-jwt'
import { createKoaServer } from 'routing-controllers'

const jwtConfig = config.get('Jwt') as any

const app: Koa = createKoaServer({
  controllers: [__dirname + '/controllers/*.js']
})

app.use(jwt({
  secret: jwtConfig.secret,
  passthrough: true
}))

app.listen(8000)
