require('should')
require('../libraries/Database')

const ProblemModel = require('../models/problem')
const UserModel = require('../models/user')

before(async function () {
  // 创建两个用户
  const users = await UserModel[Symbol.for('create')]({}, {})
  // 每个用户创建 6 条 Problem 表的 Mock 数据
  await Promise.all(users.map(user => ProblemModel[Symbol.for('create')](
    { userId: user.id }, { userId: user.id }, { userId: user.id },
    { userId: user.id }, { userId: user.id }, { userId: user.id }
  )))
})

describe('创建 Mock 数据', function () {
  it('', function () {
  })
})
