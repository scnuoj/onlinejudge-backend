const Service = require('../../extend/service')
const ProblemService = new (require('../../service/problems')(Service))()

describe('service/problem', function () {
  it('Call getProblemById with an invalid problemId', async () => {
    await assert.isRejected(ProblemService.show('123123'), Error)
  })
})
