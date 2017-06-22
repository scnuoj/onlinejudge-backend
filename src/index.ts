import { database } from 'app/library/database'
import { transformer } from 'app/middleware/transformer'
import { IJwtConfig } from 'app/typing/config'
import * as Bluebird from 'bluebird'
import * as config from 'config'
import * as http from 'http'
import * as Koa from 'koa'
import * as jwt from 'koa-jwt'
import * as logger from 'koa-logger'
import 'reflect-metadata'
import { useContainer as useContainerForRouting, useKoaServer } from 'routing-controllers'
import { Container } from 'typedi'
import { Connection, useContainer as useContainerForOrm } from 'typeorm'

useContainerForOrm(Container)
useContainerForRouting(Container)

export const app = new Koa()

const jwtConfig = <IJwtConfig>config.get('Jwt')

app.use(transformer())

app.use(logger())

app.use(jwt({
  secret: jwtConfig.secret,
  passthrough: true
}))

useKoaServer(app, {
  cors: true,
  controllers: [`${__dirname}/controller/*{js,ts}`],
  defaultErrorHandler: false
})

export const createConnection = database()

export const connection = createConnection.then(async c => {
  await new Promise(resolve => {
    app.listen(8080, () => {
      console.log('APP Listen')
      resolve(app.callback())
    })
  }
)})
