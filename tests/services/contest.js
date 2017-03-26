require('should')
const ContestService = require('../../services/contest')
const ContestModel = require('../../models/contest')

let contests = []

describe('Service: Contest', function () {
  before(async function () {
    contests = await ContestModel[Symbol.for('create')]({}, {})
  })

  after(async function () {
    await Promise.all(contests.map(contest => contest.destroy()))
  })

  it('Func: getContestList', async () => {
    const items = await ContestService.getContestList(2)
    items.should.be.an.instanceof(Array)
    items.length.should.be.equal(2)
    items[0].should.have.properties(['title', 'startTime', 'endTime'])
  })
})
