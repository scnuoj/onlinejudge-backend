const ProblemModel = require('../models/problem')
const { positiveInteger } = require('../libraries/Util')

/**
 * 根据题目 id 获取指定题目信息
 * @param {Number} id
 */
const getProblemById = async (id) => {
  return ProblemModel.findById(positiveInteger(id))
}

module.exports = {
  getProblemById
}
