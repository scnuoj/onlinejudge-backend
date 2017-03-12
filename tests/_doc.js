const doc = require('test2doc')
const request = require('supertest')
const glob = require('glob')
const path = require('path')
const app = require('../index.js')
const UserModel = require('../models/user')

module.exports = doc.title('OnlineJudge API 文档')
                    .desc(`OnlineJudge API 文档`)
                    .scheme('http')
                    .host('localhost:8000')
                    .basePath('/api')

before(async function () {
  // 获取测试用 token
  let res = await request(app)
    .post('/api/auth/register')
    .send({
      name: '测试用户名',
      email: 'ruiming.zhuang@gmail.com',
      password: '123456789'
    })
    .expect(200)
  global.TOKEN = res.body.data
})

after(async function () {
  await UserModel.destroy({
    where: {
      name: '测试用户名'
    }
  })
  doc.emit('api-documents.md')
})

glob.sync('./tests/*/*.js')
    .forEach(file => require(path.resolve(file)))
