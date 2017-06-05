describe('service/submissions', () => {
  it('create', async () => {
    await assert.isRejected(ctx.service.submissions.create(user.id, '123123', '12345', 'cc'), Error)
  })
})
