require('should')
require('../library/Database')

const ProblemModel = require('../models/problem')

before(function (done) {
  (async () => {
    try {
      // 创建 5 条 Problem 表的 Mock 数据
      await ProblemModel[Symbol.for('create')]({}, {}, {}, {}, {})
      done()
    } catch (e) {
      done(e)
    }
  })()
})

describe('创建 Mock 数据', function () {
  // 只需执行 before 内容
  it('', function () {
  })
})
