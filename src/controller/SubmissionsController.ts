import { PostSubmissionData, SubmissionQuery, UserState } from 'app/controller/interface'
import { Submission } from 'app/entity'
import { authorization } from 'app/middleware/authorization'
import { SubmissionService } from 'app/service'
import { Body, Controller, Get, Param, Post, QueryParams, State, UseBefore } from 'routing-controllers'
import { Inject, Service } from 'typedi'

@Service()
@Controller('/v1/submissions')
export class SubmissionsController {

  @Inject() private submissionService: SubmissionService

  @Post('/')
  public async index (@Body() submission: PostSubmissionData, @State('user') user: UserState) {
    const submissionId = await this.submissionService.create(user.id, submission.id, submission.code, submission.lang)
    return {
      data: submissionId,
      message: '提交成功, 结果出来后系统会通知你'
    }
  }

  @Get('/:submissionId/stat')
  public async stat (@Param('submissionId') submissionId: number) {
    const submission = await this.submissionService.stat(submissionId)
    if (submission !== null) {
      return submission
    }
  }

  @Get('/:submissionId')
  public async show (@Param('submissionId') submissionId: number) {
    return await this.submissionService.show(submissionId)
  }

  @Get('/')
  public async query (@QueryParams() query: SubmissionQuery) {
    return await this.submissionService.list(parseInt(query.limit, 10), parseInt(query.offset, 10), query.all, query.problemId)
  }
}
