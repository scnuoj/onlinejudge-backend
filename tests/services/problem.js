require('should')
require('../../libraries/Database')
require('../../libraries/Queue')
const { ParamsError } = require('../../libraries/Error')
const ProblemService = require('../../services/problem')
const ProblemModel = require('../../models/problem')
const UserModel = require('../../models/user')

let user
let problems = []

describe('Problem', function () {
  before(async function () {
    [user] = await UserModel[Symbol.for('create')]({})
    problems = await ProblemModel[Symbol.for('create')]({ userId: user.id }, { userId: user.id }, { userId: user.id }, { userId: user.id }, { userId: user.id })
  })

  after(async function () {
    await Promise.all(problems.map(problem => problem.destroy()))
    await user.destroy()
  })

  it('call getProblemById with an exist id should be ok', async () => {
    const problem = await ProblemService.getProblemById(problems[0].id)
    problem.id.should.equal(problems[0].id)
  })

  it('call getProblemlist with valid params', async () => {
    const items = await ProblemService.getProblemList(3, 2, 'updated_at', 'ASC')
    items.should.be.an.instanceof(Array)
    items.length.should.be.equal(2)
  })

  it('call getProblemlist with invalid sortby', async () => {
    const error = await ProblemService.getProblemList(3, 2, '34234', 'ASC').catch(e => e)
    error.should.be.an.instanceof(ParamsError)
  })
})
