const Service = require('../../extend/service')
const SubmissionService = new (require('../../service/submission')(Service))()
const assert = require('assert')

describe('Service: Submission', function () {
  it('Call checkSubmission with an invalid problemId', async () => {
    const error = await SubmissionService.create(USER.id, '123123', '12345', 'cc').catch(e => e)
    assert(error instanceof Error)
  })
})
