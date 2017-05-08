import BadRequestError from '../../library/error'

export default class ProblemService {
  /**
   * 根据题目 id 获取指定题目信息
   * @param {Number} id [题目 ID]
   */
  async show (id) {
    const problem = await Database.Problem.findById(id)
    if (problem) {
      return problem
    } else {
      throw new BadRequestError('题号有误')
    }
  }

  /**
   * 获取指定范围的题目列表
   * @param {Number} offset [偏移]
   * @param {Number} limit  [限制数量]
   * @param {String} sortby [排序]
   * @param {String} order  [顺序]
   */
  async list (offset = 0, limit = 10, sortby = 'id', order = 'desc') {
    const problems = await Database.Problem.findAndCountAll({
      limit,
      offset,
      order: [[sortby, order]],
      include: [{
        model: Database.User,
        as: 'user',
        attributes: ['name']
      }]
    })
    return problems
  }
}
