require('../library/database')
require('../library/queue')
const doc = require('test2doc')
const request = require('supertest')
const glob = require('glob')
const path = require('path')
const chai = require('chai')
const charAsPromised = require('chai-as-promised')
const app = require('../index')

chai.use(charAsPromised)
global.assert = chai.assert

module.exports = doc.title('OnlineJudge API 文档')
                    .desc('OnlineJudge API 文档')
                    .scheme('http')
                    .host('localhost:8000')
                    .basePath('/v1')

before(async function () {
  // 获取测试用 token
  const res = await request(app)
    .post('/v1/users/register')
    .send({
      name: '测试名',
      email: 'test@test.com',
      password: '123456789'
    })
    .expect(200)
  global.Token = res.body.data.token
  global.User = res.body.data.user
})

after(async function () {
  await Database.User.destroy({
    where: {
      name: '测试名'
    }
  })
  doc.emit('api-documents.md')
})

glob.sync('./test/*/*.js')
    .forEach(file => require(path.resolve(file)))
