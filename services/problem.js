const ProblemModel = require('../models/problem')

/**
 * 获取指定范围的题目列表
 * @param {Number} offset
 * @param {Number} limit
 */
const getProblemList = async (offset, limit) => {
  const problems = await ProblemModel.findAll({
    limit: parseInt(limit),
    offset: parseInt(offset)
  })
  return problems
}

module.exports = {
  getProblemList
}
