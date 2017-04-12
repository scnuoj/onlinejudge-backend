const ProblemModel = require('../../models/problem')
const { ParamsError } = require('../../libraries/error')

/**
 * 根据题目 id 获取指定题目信息
 * @param {Number} id [题目 ID]
 */
const getProblemById = async (id) => {
  const problem = await ProblemModel.findById(id)
  if (problem) {
    return problem
  } else {
    throw new ParamsError('题号有误')
  }
}

/**
 * 获取指定范围的题目列表
 * @param {Number} offset [偏移]
 * @param {Number} limit  [限制数量]
 * @param {String} sortby [排序]
 * @param {String} order  [顺序]
 */
const getProblemList = async (offset = 0, limit = 10, sortby = 'id', order = 'desc') => {
  const problems = await ProblemModel.findAndCountAll({
    limit,
    offset,
    order: [[sortby, order]],
    include: [{
      model: DATABASE.User,
      as: 'user',
      attributes: ['name']
    }]
  })
  return problems
}

module.exports = {
  getProblemById,
  getProblemList
}
