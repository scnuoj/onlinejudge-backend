const Service = require('../../extend/service')
const UserService = new (require('../../service/users')(Service))()

describe('service/users', () => {
  it('login', async () => {
    await assert.isRejected(UserService.login('测试名', '123123'), Error)
    await assert.isRejected(UserService.login('123123', '123123'), Error)
  })
  it('show', async () => {
    await assert.isRejected(UserService.show('123123'), Error)
  })
})
