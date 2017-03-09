const SubmissionModel = require('../models/submission')
const ProblemModel = require('../models/problem')
const Queue = require('../libraries/Queue')

/**
 * 检查用户提交代码
 * @param {Number} id   [题目 ID]
 * @param {String} code [用户代码]
 * @param {String} type [代码类别]
 */
const checkSubmission = async (id, code, type) => {
  const problem = await ProblemModel.findById(id)
  if (problem) {
    // TODO: UserId
    const submission = await SubmissionModel.create({
      problemId: id,
      userId: problem.userId,
      type,
      code
    })
    await Queue.submitCheckCodeTask(submission.id)
    return submission.id
  } else {
    throw new Error('错误的 ProblemId')
  }
}

module.exports = {
  checkSubmission
}
