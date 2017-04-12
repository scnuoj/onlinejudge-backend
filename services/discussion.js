const DiscussionModel = require('../models/discussion')

/**
 * 获取讨论
 * @param {Number} limit [数量限制]
 */
const getDiscussionList = async (limit = 10) => {
  const discussions = await DiscussionModel.findAll({
    limit,
    order: [['created_at', 'desc']]
  })
  return discussions
}

module.exports = {
  getDiscussionList
}
