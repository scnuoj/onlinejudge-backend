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

/**
 * 获取最新发布的题目
 */
const getNewestProblemList = async () => {
  const problems = await ProblemModel.findAll({
    limit: 10,
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
  getNewestProblemList
}
