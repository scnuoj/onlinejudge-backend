const DatabaseSchema = require('../libraries/Database').DatabaseSchema

const models = ['User', 'Problem', 'Submission']

describe('初始化数据库', function () {
  before(async function () {
    await DATABASE.sequelize.authenticate()
  })
  it('Intialize models', async function () {
    for (const model of models) {
      const Model = DATABASE.sequelize.define(model, DatabaseSchema[model])
      await Model.sync({
        force: true
      })
    }
  })
})
