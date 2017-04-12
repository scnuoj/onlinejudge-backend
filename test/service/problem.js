const Service = require('../../extend/service')
const ProblemService = new (require('../../service/problem')(Service))()
const assert = require('assert')

describe('Service: Problem', function () {
  it('Call getProblemById with an invalid problemId', async () => {
    const error = await ProblemService.show('123123').catch(e => e)
    assert(error instanceof Error)
  })
})
