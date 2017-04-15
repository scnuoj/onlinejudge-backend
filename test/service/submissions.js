const Service = require('../../extend/service')
const SubmissionService = new (require('../../service/submissions')(Service))()

describe('service/submissions', () => {
  it('create', async () => {
    await assert.isRejected(SubmissionService.create(user.id, '123123', '12345', 'cc'), Error)
  })
})
