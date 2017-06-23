import { Submission } from 'app/entity'
import { ProblemRepository, SubmissionRepository } from 'app/repository'
import { BadRequestError } from 'routing-controllers'
import { Service } from 'typedi'
import { OrmCustomRepository } from 'typeorm-typedi-extensions'

@Service()
export class SubmissionService {

  @OrmCustomRepository(ProblemRepository)
  private problemRepository: ProblemRepository

  @OrmCustomRepository(SubmissionRepository)
  private submissionRepository: SubmissionRepository

  public async create (userId: number, id: number, code: string, lang: string): Promise<number> {
    const problem = await this.problemRepository.findOneById(id)
    if (!problem) {
      throw new BadRequestError('Problem 不存在')
    }
    const submission = this.submissionRepository.create({
      user: userId,
      id,
      code,
      lang
    })
    await this.submissionRepository.persist(submission)
    // await queue.submitCheckCodeTask(submission.id)
    return submission.id
  }

  public async stat (submissionId: number): Promise<Submission | null> {
    const submission = await this.submissionRepository.findOneById(submissionId)
    if (!submission) {
      throw new BadRequestError('Submission 不存在')
    }
    return submission.result ? submission : null
  }

  public async show (submissionId: number): Promise<{ result: Submission; state: Submission[]; }> {
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

  public async list (limit: number, offset: number, allUser: boolean, problemId?: number): Promise<Submission[]> {
    return this.submissionRepository.getList(offset, limit, problemId)
  }
}
