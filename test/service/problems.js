describe('service/problems', () => {
  it('show', async () => {
    await assert.isRejected(ctx.service.problems.show('123123'), Error)
  })
})
