const SubmissionModel = require('../models/submission')
const ProblemModel = require('../models/problem')
const Queue = require('../libraries/queue')
const { ParamsError } = require('../libraries/error')

/**
 * 检查用户提交代码
 * @param {UUID}   userId [用户 ID]
 * @param {Number} id     [题目 ID]
 * @param {String} code   [用户代码]
 * @param {String} lang   [代码类别]
 */
const checkSubmission = async (userId, id, code, lang) => {
  const problem = await ProblemModel.findById(id)
  if (problem) {
    const submission = await SubmissionModel.create({
      problemId: id,
      userId,
      lang,
      code
    })
    await Queue.submitCheckCodeTask(submission.id)
    return submission.id
  } else {
    throw new ParamsError('错误的 ProblemId')
  }
}

module.exports = {
  checkSubmission
}
