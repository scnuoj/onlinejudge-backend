require('should')
const request = require('supertest')
const app = require('../../index.js')
const doc = require('test2doc').group('问题').basePath('/problems')

const ProblemModel = require('../../models/problem')
const UserModel = require('../../models/user')

let problem, user

describe('问题', function () {
  before(function (done) {
    (async () => {
      try {
        [user] = await UserModel[Symbol.for('create')]({});
        [problem] = await ProblemModel[Symbol.for('create')]({
          userId: user.id
        })
        done()
      } catch (e) {
        done(e)
      }
    })()
  })

  after(function (done) {
    (async () => {
      try {
        await problem.destroy()
        done()
      } catch (e) {
        done(e)
      }
    })()
  })

  doc.action('获取全部问题').is(doc => {
    it('获取全部问题', function (done) {
      (async () => {
        try {
          let res = await request(app)
            .get(doc.get('/api/problems'))
            .query(doc.query({
              limit: doc.val(1, '限制查询数量'),
              offset: doc.val(0, '查询偏移')
            }))
            .expect(200)
          res = doc.resBody(res.body)
          res.data[0].should.have.properties('userId')
          done()
        } catch (e) {
          done(e)
        }
      })()
    })
  })

  doc.action('获取最新发布的问题').is(doc => {
    it('获取最新发布的问题', function (done) {
      (async () => {
        try {
          let res = await request(app)
            .get(doc.get('/api/problems/recent'))
            .query(doc.query({
              limit: doc.val(1, '限制查询数量')
            }))
            .expect(200)
          res = doc.resBody(res.body)
          res.data[0].should.have.properties('user')
          res.data[0].user.should.have.properties('name')
          done()
        } catch (e) {
          done(e)
        }
      })()
    })
  })
})
