require('should')
const request = require('supertest-test2doc')(require('supertest'))
const app = require('../../index.js')
const doc = require('test2doc').group('一次提交').basePath('/submission')

const ProblemModel = require('../../models/problem')
const UserModel = require('../../models/user')
const SubmissionModel = require('../../models/submission')

let problem, user, submissionId

describe('一次提交', function () {
  before(async function () {
    [user] = await UserModel[Symbol.for('create')]({});
    [problem] = await ProblemModel[Symbol.for('create')]({
      userId: user.id
    })
  })

  after(async function () {
    await SubmissionModel.destroy({
      where: {
        id: submissionId
      }
    })
    await problem.destroy()
    await user.destroy()
  })

  doc.action('提交一次代码').is(doc => {
    it('提交一次代码', async function () {
      let res = await request(app).with(doc)
        .post('/api/submission')
        .send({
          id: doc.val(problem.id, '题目 ID'),
          code: doc.val('testcode', '用户代码'),
          type: doc.val('cc', '代码类别')
        })
        .expect(200)
      res = doc.resBody(res.body)
      res.data.should.have.properties('submissionId')
      submissionId = res.data.submissionId
    })
  })
})
