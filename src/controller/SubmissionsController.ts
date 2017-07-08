import { PostSubmissionData, SubmissionQuery, UserState } from 'app/controller/interface'
import { Submission } from 'app/entity'
import { SubmissionService } from 'app/service'
import { Body, Controller, Get, Param, Post, QueryParams, State, UseBefore } from 'routing-controllers'
import { Inject, Service } from 'typedi'
import { authorization } from 'app/middleware/authorization'

const runResult: string[] = [
  'PASS',
  'CPU_TIME_LIMIT_EXCEEDED',
  'REAL_TIME_LIMIT_EXCEEDED',
  'MEMORY_LIMIT_EXCEEDED',
  'RUNTIME_ERROR',
  'SYSTEM_ERROR',
  'COMPILE_ERROR' // 自定义的编译错误
]

@Service()
@Controller('/v1/submissions')
@UseBefore(authorization())
export class SubmissionsController {

  @Inject() private submissionService: SubmissionService

  @Post('/')
  public async create (@Body() submission: PostSubmissionData, @State('user') user: UserState): Promise<{ data: number; message: string; }> {
    const submissionId = await this.submissionService.create(user.id, submission.id, submission.code, submission.lang)
    return {
      data: submissionId,
      message: '提交成功, 结果出来后系统会通知你'
    }
  }

  @Get('/:submissionId/stat')
  public async stat (@Param('submissionId') submissionId: number): Promise<{ data: Submission | null, message: string | null }> {
    const submission = await this.submissionService.stat(submissionId)
    return {
      message: submission && runResult[submission.result],
      data: submission
    }
  }

  @Get('/:submissionId')
  public async show (@Param('submissionId') submissionId: number): Promise<{ data: { result: Submission; state: Submission[]; } }> {
    const submission = await this.submissionService.show(submissionId)
    return {
      data: submission
    }
  }

  @Get('/')
  public async query (@QueryParams() query: SubmissionQuery, @State('user') user: UserState): Promise<{ data: [Submission[], number] }> {
    const limit = parseInt(query.limit, 10)
    const offset = parseInt(query.offset, 10)
    const problemId = query.problemId ? parseInt(query.problemId, 10) : undefined
    const submissions = query.selfOnly === 'true' ? await this.submissionService.getMySubmissions(user.id, limit, offset, problemId)
                                                  : await this.submissionService.getAllSubmissions(limit, offset, problemId)
    return {
      data: submissions
    }
  }
}
