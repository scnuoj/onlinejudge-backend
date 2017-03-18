require('should')
const UserService = require('../../services/user')

describe('Service: User', function () {
  it('Func: getUserById', async () => {
    const userInfo = await UserService.getUserById(USER.id)
    userInfo.name.should.equal(USER.name)
    userInfo.email.should.equal(USER.email)
  })
})
