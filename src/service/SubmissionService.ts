import { Submission } from 'app/entity'
import { ProblemRepository, SubmissionRepository, UserRepository } from 'app/repository'
import { BadRequestError } from 'routing-controllers'
import { Service } from 'typedi'
import { OrmCustomRepository } from 'typeorm-typedi-extensions'
import { queue } from 'app/library/queue'

@Service()
export class SubmissionService {

  @OrmCustomRepository(ProblemRepository)
  private problemRepository: ProblemRepository

  @OrmCustomRepository(SubmissionRepository)
  private submissionRepository: SubmissionRepository

  @OrmCustomRepository(UserRepository)
  private userRepository: UserRepository

  public async create (userId: number, id: number, code: string, lang: string): Promise<number> {
    const problem = await this.problemRepository.findOneById(id)
    const user = await this.userRepository.findOneById(userId)
    if (!problem || !user) {
      throw new BadRequestError('提交失败')
    }
    const submission = this.submissionRepository.create({
      user: user,
      problem: problem,
      code,
      lang
    })
    problem.submitCount ++
    await this.problemRepository.persist(problem)
    await this.submissionRepository.persist(submission)
    await queue.submitCheckCodeTask(submission.id)
    return submission.id
  }

  public async stat (submissionId: number): Promise<Submission | null> {
    const submission = await this.submissionRepository.findOneById(submissionId)
    if (!submission) {
      throw new BadRequestError('Submission 不存在')
    }
    return submission.result >= 0 ? submission : null
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

  public async getAllSubmissions (limit: number, offset: number, problemId?: number): Promise<[Submission[], number]> {
    return this.submissionRepository.getAllSubmissions(limit, offset, problemId)
  }

  public async getMySubmissions (userId: number, limit: number, offset: number, problemId?: number): Promise<[Submission[], number]> {
    return this.submissionRepository.getMySubmissions(userId, limit, offset, problemId)
  }
}
