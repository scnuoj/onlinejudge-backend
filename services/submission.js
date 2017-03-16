const SubmissionModel = require('../models/submission')
const ProblemModel = require('../models/problem')
const Queue = require('../libraries/Queue')
const { _validLang, _exist, _validCode } = require('../libraries/Util')
const { ParamsError } = require('../libraries/Error')

/**
 * 检查用户提交代码
 * @param {Number} id   [题目 ID]
 * @param {String} code [用户代码]
 * @param {String} lang [代码类别]
 */
const checkSubmission = async (id, code, lang) => {
  [lang, code] = [_validLang(lang), _validCode(code), _exist(id)]
  const problem = await ProblemModel.findById(id)
  if (problem) {
    // TODO: UserId
    const submission = await SubmissionModel.create({
      problemId: id,
      userId: problem.userId,
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
