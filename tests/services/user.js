require('should')
const UserService = require('../../services/user')
const UserModel = require('../../models/user')

let user

describe('User', function () {
  before(async function () {
    [user] = await UserModel[Symbol.for('create')]({})
  })

  after(async function () {
    await user.destroy()
  })

  it('call getUserById with valid params should be ok', async () => {
    const userInfo = await UserService.getUserById(user.id)
    userInfo.name.should.equal(user.name)
    userInfo.email.should.equal(user.email)
    await user.destroy()
  })
})
