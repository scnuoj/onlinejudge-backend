import { BadRequestError } from 'routing-controllers'
import { Problem } from 'app/model/Problem'
import { Submission } from 'app/model/Submission'
import { User } from 'app/model/User'
import { Model } from 'sequelize-typescript'
import { Service } from 'typedi'

import { queue } from 'app/library/queue'

@Service()
export class SubmissionService {
  public async create (userId: string, id: number, code: string, lang: string): Promise<number> {
    const problem = await Problem.findById<Problem>(id)
    if (!problem) {
      throw new BadRequestError('Problem 不存在')
    }
    const submission = await Submission.create<Submission>({
      problemId: id,
      userId,
      lang,
      code
    })
    await queue.submitCheckCodeTask(submission.id)

    return submission.id
  }

  public async stat (submissionId: number): Promise<Submission> {
    const submission = await Submission.findById<Submission>(submissionId)
    if (!submission) {
      throw new BadRequestError('Submission 不存在')
    }
    if (!submission.result && !submission.result) {
      return null
    } else {
      return submission
    }
  }

  public async show (submissionId: number): Promise<{ result: Submission, state: Submission[] }> {
    const submission = await Submission.findById<Submission>(submissionId, {
      include: [{
        model: Problem,
        as: 'problem'
      }, {
        model: User,
        as: 'user',
        attributes: ['id']
      }]
    })
    if (!submission) {
      throw new BadRequestError('Submission 不存在')
    }
    const submissionList = await Submission.findAll<Submission>({
      where: {
        problemId: submission.problemId
      },
      attributes: ['id', 'realTime']
    })

    return {
      result: submission,
      state: submissionList
    }
  }

  public async list (limit: number, offset: number, allUser: boolean, problemId?: number): Promise<{ rows: Submission[], count: number }> {
    return await Submission.findAndCountAll<Submission>({
      where: {
        problemId
      },
      limit,
      offset,
      include: [{
        model: User,
        as: 'user',
        attributes: ['name', 'id', 'avatar', 'gender', 'school', 'email', 'remark']
      }, {
        model: Problem,
        as: 'problem'
      }]
    })
  }
}
