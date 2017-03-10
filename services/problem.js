const ProblemModel = require('../models/problem')

/**
 * 根据题目 id 获取指定题目信息
 * @param {Number} id [题目 ID]
 */
const getProblemById = async (id) => {
  return ProblemModel.findById(id)
}

module.exports = {
  getProblemById
}
