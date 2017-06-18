import { database } from 'app/library/database'
import { onerror } from 'app/middleware/onerror'
import { IJwtConfig } from 'app/typing/config'
import 'app/typing/context'
import * as Bluebird from 'bluebird'
import * as config from 'config'
import * as http from 'http'
import * as Koa from 'koa'
import * as jwt from 'koa-jwt'
import * as logger from 'koa-logger'
import 'reflect-metadata'
import { useKoaServer } from 'routing-controllers'
import { Container } from 'typedi'

import { ProblemService } from 'app/service/ProblemService'
import { SubmissionService } from 'app/service/SubmissionService'
import { UserService } from 'app/service/UserService'

export const app = new Koa()

const jwtConfig = <IJwtConfig>config.get('Jwt')

app.use(onerror())

app.use(logger())

app.use(jwt({
  secret: jwtConfig.secret,
  passthrough: true
}))

useKoaServer(app, {
  cors: true,
  controllers: [`${__dirname}/controller/*{js,ts}`]
})

app.context.services = {
  problems: Container.get(ProblemService),
  submissions: Container.get(SubmissionService),
  user: Container.get(UserService)
}
app.context.ok = function <T> (data?: T, message?: string): void {
  this.status = 200
  this.body = { success: true, message, data }
}
app.context.error = function <T> (data?: T, message?: string): void {
  this.status = 400
  this.body = { success: false, message, data }
}

export const connection = new Promise((resolve: (res: (req: http.IncomingMessage, res: http.ServerResponse) => void) => void) => {
  database.authenticate().then(() => {
    console.log('DB Connect')
    app.listen(8080, () => {
      console.log('APP Listen')
      resolve(app.callback())
    })
  })
})
