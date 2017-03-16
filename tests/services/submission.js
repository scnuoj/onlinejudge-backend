require('should')
const { ParamsError } = require('../../libraries/Error')
const SubmissionService = require('../../services/submission')
const ProblemModel = require('../../models/problem')
const UserModel = require('../../models/user')
const SubmissionModel = require('../../models/submission')

let user
let problems = []

describe('Submission', function () {
  before(async function () {
    [user] = await UserModel[Symbol.for('create')]({})
    problems = await ProblemModel[Symbol.for('create')]({ userId: user.id }, { userId: user.id }, { userId: user.id }, { userId: user.id }, { userId: user.id })
  })

  after(async function () {
    await Promise.all(problems.map(problem => problem.destroy()))
    await user.destroy()
  })

  it('call checkSubmission with valid params should be ok', async () => {
    const submissionId = await SubmissionService.checkSubmission(user, problems[0].id, '12345', 'cc')
    const submission = await SubmissionModel.findById(submissionId)
    submission.problemId.should.equal(problems[0].id)
    submission.code.should.equal('12345')
    submission.lang.should.equal('cc')
    await submission.destroy()
  })

  it('call checkSubmission with invalid params should throw ParamsError', async () => {
    const errors = await Promise.all([
      SubmissionService.checkSubmission('123', '12345', 'cc').catch(e => e),
      SubmissionService.checkSubmission(problems[0].id, '12345', 'bilibili').catch(e => e),
      SubmissionService.checkSubmission(problems[0].id, undefined, 'cc').catch(e => e)
    ])
    errors.forEach(error => error.should.be.an.instanceof(ParamsError))
  })
})
