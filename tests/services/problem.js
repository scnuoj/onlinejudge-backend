const ProblemService = require('../../services/problem')

const { ParamsError } = require('../../libraries/Error')

describe('Service: Problem', function () {
  it('Call getProblemById with an invalid problemId', async () => {
    const error = await ProblemService.getProblemById('123123').catch(e => e)
    error.should.be.an.instanceOf(ParamsError)
  })
})
