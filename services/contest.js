const ContestModel = require('../models/contest')

/**
 * 获取当前的比赛信息
 * @param {Number} limit [数量限制]
 */
const getContestList = async (limit = 10) => {
  const contests = await ContestModel.findAll({
    limit,
    order: [['startTime', 'desc']]
  })
  return contests
}

module.exports = {
  getContestList
}
