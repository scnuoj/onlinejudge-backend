const Service = require('../../extend/service')
const UserService = new (require('../../service/user')(Service))()
const assert = require('assert')

describe('Service: User', function () {
  it('Call login with a wrong password', async () => {
    const error = await UserService.login('测试名', '123123').catch(e => e)
    assert(error instanceof Error)
  })
  it('Call login with an unexisted username', async () => {
    const error = await UserService.login('123123', '123123').catch(e => e)
    assert(error instanceof Error)
  })
  it('Call getUserById with an invalid userId', async () => {
    const error = await UserService.show('123123').catch(e => e)
    assert(error instanceof Error)
  })
})
