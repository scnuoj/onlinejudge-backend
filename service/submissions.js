import { BadRequestError } from '../library/error'
import Queue from '../library/queue'

export default class SubmissionService {
  /**
   * 检查用户提交代码
   * @param {UUID}   userId [用户 ID]
   * @param {Number} id     [题目 ID]
   * @param {String} code   [用户代码]
   * @param {String} lang   [代码类别]
   */
  async create (userId, id, code, lang) {
    const problem = await Database.Problem.findById(id)
    if (problem) {
      const submission = await Database.Submission.create({
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
