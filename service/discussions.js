module.exports = Service => class DiscussionService extends Service {
  /**
   * 获取讨论
   * @param {Number} limit [数量限制]
   */
  async list (limit = 10) {
    return await Database.Discussion.findAll({
      limit,
      order: [['created_at', 'desc']]
    })
  }
}
