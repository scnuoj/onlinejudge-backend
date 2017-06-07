import * as Koa from 'koa'
import * as logger from 'koa-logger'
import * as config from 'config'
import * as jwt from 'koa-jwt'
import { useKoaServer } from 'routing-controllers'
import connection from './library/database'

(async () => {

const jwtConfig = config.get('Jwt') as any

const app = new Koa()

await connection

useKoaServer(app, {
  controllers: [__dirname + '/controller/*{js,ts}']
})

app.use(logger())

app.use(jwt({
  secret: jwtConfig.secret,
  passthrough: true
}))

app.listen(8000, () => console.log('listening'))

})()
