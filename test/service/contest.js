const Service = require('../../extend/service')
const ContestService = new (require('../../service/contest')(Service))()
const assert = require('assert')

let contests = []

describe('Service: Contest', function () {
  before(async function () {
    contests = await Database.Contest.mock({}, {})
  })

  after(async function () {
    await Promise.all(contests.map(contest => contest.destroy()))
  })

  it('Func: getContestList', async () => {
    const items = await ContestService.list(2)
    assert(Array.isArray(items))
    assert(items.length === 2)
  })
})
