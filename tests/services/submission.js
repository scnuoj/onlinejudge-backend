const SubmissionService = require('../../services/submission')

const { ParamsError } = require('../../libraries/Error')

describe('Service: Submission', function () {
  it('Call checkSubmission with an invalid problemId', async () => {
    const error = await SubmissionService.checkSubmission(USER.id, '123123', '12345', 'cc').catch(e => e)
    error.should.be.an.instanceOf(ParamsError)
  })
})
