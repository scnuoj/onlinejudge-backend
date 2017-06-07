import { Model } from 'sequelize-typescript'
import { Service } from 'typedi'
import { BadRequestError } from '../library/error'
import { Problem } from '../model/problem'

import Queue from '../library/queue'

@Service()
export class SubmissionService {
  public async create (userId: string, id: number, code: string, lang: string) {
    const problem = await Problem.findById<Problem>(id)
    if (problem) {
      const submission = await Problem.create<Problem>({
        problemId: id,
        userId,
        lang,
        code
      })
      await Queue.submitCheckCodeTask(submission.id)
      return submission.id
    } else {
      throw new BadRequestError('错误的 ProblemId')
    }
  }
}
