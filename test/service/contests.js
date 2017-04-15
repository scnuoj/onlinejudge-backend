const Service = require('../../extend/service')
const ContestService = new (require('../../service/contests')(Service))()

let contests = []

describe('service/contest', function () {
  before(async function () {
    contests = await Database.Contest.mock({}, {})
  })

  after(async function () {
    await Promise.all(contests.map(contest => contest.destroy()))
  })

  it('getContestList', async () => {
    const items = await ContestService.list(2)
    assert.isArray(items)
    assert.equal(items.length, 2)
  })
})
