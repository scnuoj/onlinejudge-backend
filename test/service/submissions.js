const Service = require('../../extend/service')
const SubmissionService = new (require('../../service/submissions')(Service))()

describe('service/submission', function () {
  it('Call checkSubmission with an invalid problemId', async () => {
    await assert.isRejected(SubmissionService.create(User.id, '123123', '12345', 'cc'), Error)
  })
})
