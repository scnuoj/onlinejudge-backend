module.exports = Service => class PostService extends Service {
  /**
   * 获取文章
   * @param {Number} limit [数量限制]
   */
  async list (limit = 10) {
    return await Database.Post.findAll({
      limit,
      order: [['created_at', 'desc']]
    })
  }
}
