const Service = require('../../extend/service')
const ContestService = new (require('../../service/contests')(Service))()

let contests = []

describe('service/contests', () => {
  before(async () => {
    contests = await Database.Contest.mock({}, {})
  })

  after(async () => {
    await Promise.all(contests.map(contest => contest.destroy()))
  })

  it('list', async () => {
    const items = await ContestService.list(2)
    assert.isArray(items)
    assert.equal(items.length, 2)
  })
})
