describe('service/users', () => {
  it('login', async () => {
    await assert.isRejected(ctx.service.users.login('测试名', '123123'), Error)
    await assert.isRejected(ctx.service.users.login('123123', '123123'), Error)
  })
  it('show', async () => {
    await assert.isRejected(ctx.service.users.show('123123'), Error)
  })
})
