const DiscussionModel = require('../models/Discussion')

/**
 * 获取讨论
 * @param {Number} limit [数量限制]
 */
const getDiscussionList = async (limit = 10) => {
  const Discussions = await DiscussionModel.findAll({
    limit,
    order: [['created_at', 'desc']]
  })
  return Discussions
}

module.exports = {
  getDiscussionList
}
