import * as Bluebird from 'bluebird'
import * as http from 'http'
import 'reflect-metadata'
import app from './app'
import db from './library/database'

import { Context as _Context } from 'koa'
import { Container } from 'typedi'

import { ProblemService } from './service/problems'
import { SubmissionService } from './service/submissions'
import { UserService } from './service/users'

function createServer () {
  return new Promise(resolve => {
    db.authenticate().then(() => {
      console.log('DB Connect')
      app.listen(8080, () => {
        console.log('APP Listen')
        resolve(app.callback())
      })
    })
  })
}

// for test
export default createServer()

Reflect.set(app.context, 'services', {
  problems: Container.get(ProblemService),
  submissions: Container.get(SubmissionService),
  users: Container.get(UserService)
})
Reflect.set(app.context, 'ok', function (data?: any, message?: string) {
  this.body = { success: true, message, data }
})
Reflect.set(app.context, 'error', function (data?: any, message?: string) {
  this.status = 400
  this.body = { success: false, message, data }
})

// d.ts
export interface Context extends _Context {
  // ctx.services
  services: {
    problems: ProblemService,
    submissions: SubmissionService,
    users: UserService
  },
  // ctx.ok & ctx.error
  ok <T> (data?: T, message?: string): { success: true, message: string, data: T },
  error <T> (data?: T, message?: string): { success: false, message: string, data: T }
}
