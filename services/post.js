const PostModel = require('../models/post')

/**
 * 获取文章
 * @param {Number} limit [数量限制]
 */
const getPostList = async (limit = 10) => {
  const posts = await PostModel.findAll({
    limit,
    order: [['created_at', 'desc']]
  })
  return posts
}

module.exports = {
  getPostList
}
