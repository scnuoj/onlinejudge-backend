const ProblemModel = require('../models/problem')
const { positiveInteger } = require('../libraries/Util')
/**
 * 获取指定范围的题目列表
 * @param {Number} offset [偏移]
 * @param {Number} limit  [限制数量]
 */
const getProblemList = async (offset = 0, limit = 10) => {
  const problems = await ProblemModel.findAll({
    limit: positiveInteger(limit),
    offset: positiveInteger(offset),
    attributes: ['id', 'title', 'takeCount', 'submitCount']
  })
  return problems
}

/**
 * 获取最新发布的题目
 * @param {Number} limit [限制数量]
 */
const getRecentProblemList = async (limit = 10) => {
  const problems = await ProblemModel.findAll({
    limit: positiveInteger(limit),
    order: [['createdAt', 'DESC']],
    attributes: ['id', 'title', 'description', 'type', 'userId', 'createdAt'],
    include: [{
      model: DATABASE.User,
      as: 'user',
      attributes: ['name']
    }]
  })
  return problems
}

module.exports = {
  getProblemList,
  getRecentProblemList
}
