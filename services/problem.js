const ProblemModel = require('../models/problem')
const { uint } = require('../libraries/Util')

/**
 * 根据题目 id 获取指定题目信息
 * @param {Number} id [题目 ID]
 */
const getProblemById = async (id) => {
  const problem = await ProblemModel.findById(uint(id))
  if (problem) {
    return problem
  } else {
    throw new TypeError('题号有误')
  }
}

module.exports = {
  getProblemById
}
