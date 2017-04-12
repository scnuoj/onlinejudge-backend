const UserService = require('../../services/user')

const { AuthError } = require('../../libraries/error')

describe('Service: User', function () {
  it('Call login with a wrong password', async () => {
    const error = await UserService.login('测试名', '123123').catch(e => e)
    error.should.be.an.instanceOf(AuthError)
  })
  it('Call login with an unexisted username', async () => {
    const error = await UserService.login('123123', '123123').catch(e => e)
    error.should.be.an.instanceOf(AuthError)
  })
  it('Call getUserById with an invalid userId', async () => {
    const error = await UserService.getUserById('123123').catch(e => e)
    error.should.be.an.instanceOf(AuthError)
  })
})
