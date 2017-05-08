describe('service/problems', () => {
  it('show', async () => {
    await assert.isRejected(ctx.service.management.problems.show('123123'), Error)
  })
})
