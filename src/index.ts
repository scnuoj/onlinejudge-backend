import { database, typeorm } from 'app/library/database'
import { IJwtConfig } from 'app/typing/config'
import 'app/typing/context'
import * as Bluebird from 'bluebird'
import * as config from 'config'
import * as http from 'http'
import * as Koa from 'koa'
import * as jwt from 'koa-jwt'
import * as logger from 'koa-logger'
import 'reflect-metadata'
import { useKoaServer, useContainer as useContainerForRouting } from 'routing-controllers'
import { Container } from 'typedi'
import { useContainer as useContainerForOrm } from 'typeorm'
import { transformer } from 'app/middleware/transformer'
import { Problem } from 'app/entity/Problem'

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

export const connection = typeorm().then(async c => {
  database.authenticate().then(() => new Promise(resolve => {
    app.listen(8080, () => {
      console.log('APP Listen')
      resolve(app.callback())
    })
  })
)})

/**
 * Monkey-Patch to routing-controller
 * 关闭 classTransformer 对 response 的转换
 * 以避免返回 sequelize instance 的出错转换
 */
import { KoaDriver } from 'routing-controllers/driver/koa/KoaDriver'
const originHandleSuccess = KoaDriver.prototype.handleSuccess
KoaDriver.prototype.handleSuccess = function () {
  this.useClassTransformer = false
  return originHandleSuccess.apply(this, arguments)
}
