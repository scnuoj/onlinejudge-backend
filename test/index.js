const chai = require('chai')
const charAsPromised = require('chai-as-promised')
const jwt = require('jsonwebtoken')
const JwtConfig = require('config').get('Jwt')

chai.use(charAsPromised)
global.assert = chai.assert

require('require-dir')('../library')
require('../')

before(async () => {
  const [user] = [global.user] = await Database.User.mock({})
  global.token = jwt.sign({ id: user.id }, JwtConfig.secret)
})

after(async () => {
  await user.destroy()
})

require('require-dir')('route')
require('require-dir')('service')
