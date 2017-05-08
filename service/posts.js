export default class PostService {
  /**
   * 获取文章
   * @param {Number} limit [数量限制]
   */
  async list (limit = 10) {
    return await Database.Post.findAll({
      limit,
      order: [['createdAt', 'desc']]
    })
  }
}
