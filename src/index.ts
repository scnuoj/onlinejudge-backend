import 'reflect-metadata'
import 'app/library/config'
import { database } from 'app/library/database'
import { transformer } from 'app/middleware/transformer'
import * as config from 'config'
import * as http from 'http'
import * as Koa from 'koa'
import * as jwt from 'koa-jwt'
import * as logger from 'koa-logger'
import { useContainer as useContainerForRouting, useKoaServer } from 'routing-controllers'
import { Container } from 'typedi'
import { Connection, useContainer as useContainerForOrm } from 'typeorm'
import 'app/library/queue'

useContainerForOrm(Container)
useContainerForRouting(Container)

export const app = new Koa()

app.use(transformer())

app.use(logger())

app.use(jwt({
  secret: config.jwt.secret,
  passthrough: true
}))

useKoaServer(app, {
  cors: true,
  controllers: [`${__dirname}/controller/*{js,ts}`],
  defaultErrorHandler: false
})

// For Fake
export const createConnection: Promise<Connection> = database()

// For Route Test
export const connection = createConnection.then(c => {
  return new Promise(resolve => {
    app.listen(8080, () => {
      console.log('APP Listen')
      resolve(app.callback())
    })
  }
) as Promise<(req: http.IncomingMessage, res: http.ServerResponse) => void>
})
