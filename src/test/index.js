import chai from 'chai'
import chaiAsPromised from 'chai-as-promised'
import jwt from 'jsonwebtoken'
import app from '../index.js'
import glob from 'glob'
import { requireDirectory } from 'toolkit'

requireDirectory('../library/*.js')

const JwtConfig = require('config').Jwt
chai.use(chaiAsPromised)
global.assert = chai.assert

before(async () => {
  global.ctx = app.context
  const server = await app.listen()
  global.app = server
  global.user = (await Database.User.mock({}))[0]
  global.token = jwt.sign({ id: user.id }, JwtConfig.secret)
})

after(async () => {
  await global.user.destroy()
})

glob.sync(`${__dirname}/{route,service}/**/*.js`).forEach(file => {
  require(file)
})
