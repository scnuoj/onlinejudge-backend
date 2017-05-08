export default class DiscussionService {
  /**
   * 获取讨论
   * @param {Number} limit [数量限制]
   */
  async list (limit = 10) {
    return await Database.Discussion.findAll({
      limit,
      order: [['createdAt', 'desc']]
    })
  }
}
