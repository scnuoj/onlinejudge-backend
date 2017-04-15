const Service = require('../../extend/service')
const UserService = new (require('../../service/users')(Service))()

describe('service/user', function () {
  it('Call login with a wrong password', async () => {
    await assert.isRejected(UserService.login('测试名', '123123'), Error)
  })
  it('Call login with an unexisted username', async () => {
    await assert.isRejected(UserService.login('123123', '123123'), Error)
  })
  it('Call getUserById with an invalid userId', async () => {
    await assert.isRejected(UserService.show('123123'), Error)
  })
})
