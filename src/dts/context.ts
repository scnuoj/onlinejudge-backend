import { ProblemService } from 'app/service/ProblemService'
import { SubmissionService } from 'app/service/SubmissionService'
import { UserService } from 'app/service/UserService'
import { Context } from 'koa'

declare module 'koa' {
  // tslint:disable-next-line
  export interface BaseContext {
    services: {
      problems: ProblemService,
      submissions: SubmissionService,
      user: UserService
    }
    ok <T> (data?: T, message?: string): void,
    error <T> (data?: T, message?: string): void
  }
}
