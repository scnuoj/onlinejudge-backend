import { Problem, Submission } from 'app/entity'
import { ProblemRepository, SubmissionRepository } from 'app/repository'
import { BadRequestError } from 'routing-controllers'
import { Service } from 'typedi'
import { OrmCustomRepository, OrmRepository } from 'typeorm-typedi-extensions'

import { queue } from 'app/library/queue'

@Service()
export class SubmissionService {

  @OrmCustomRepository(ProblemRepository)
  private problemRepository: ProblemRepository

  @OrmCustomRepository(SubmissionRepository)
  private submissionRepository: SubmissionRepository

  public async create (userId: number, id: number, code: string, lang: string) {
    const problem = await this.problemRepository.findOneById(id)
    if (!problem) {
      throw new BadRequestError('Problem 不存在')
    }
    const submission = await this.submissionRepository.create({
      user: userId,
      id,
      code,
      lang
    })
    await queue.submitCheckCodeTask(submission.id)
    return submission.id
  }

  public async stat (submissionId: number) {
    const submission = await this.submissionRepository.findOneById(submissionId)
    if (!submission) {
      throw new BadRequestError('Submission 不存在')
    }
    return submission.result ? submission : null
  }

  public async show (submissionId: number) {
    const submission = await this.submissionRepository.getWithUserAndProblem(submissionId)
    if (!submission) {
      throw new BadRequestError('Submission 不存在')
    }
    const submissionList = await this.submissionRepository.getByProblemId(submission.problem.id)
    return {
      result: submission,
      state: submissionList
    }
  }

  public async list (limit: number, offset: number, allUser: boolean, problemId?: number) {
    return this.submissionRepository.getList(offset, limit, problemId)
  }
}
