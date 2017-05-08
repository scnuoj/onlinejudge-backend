export default class ContestService {
  /**
   * 获取当前的比赛信息
   * @param {Number} limit [数量限制]
   */
  async list (limit = 10) {
    return await Database.Contest.findAll({
      limit,
      order: [['startTime', 'desc']]
    })
  }
}
