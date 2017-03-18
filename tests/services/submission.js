require('should')
const SubmissionService = require('../../services/submission')
const ProblemModel = require('../../models/problem')
const SubmissionModel = require('../../models/submission')

let problems = []

describe('Service: Submission', function () {
  before(async function () {
    problems = await ProblemModel[Symbol.for('create')]({ userId: USER.id }, { userId: USER.id }, { userId: USER.id }, { userId: USER.id }, { userId: USER.id })
  })

  after(async function () {
    await Promise.all(problems.map(problem => problem.destroy()))
  })

  it('Func: checkSubmission', async () => {
    const submissionId = await SubmissionService.checkSubmission(USER.id, problems[0].id, '12345', 'cc')
    const submission = await SubmissionModel.findById(submissionId)
    submission.problemId.should.equal(problems[0].id)
    submission.code.should.equal('12345')
    submission.lang.should.equal('cc')
    await submission.destroy()
  })
})
