const DatabaseSchema = require('../libraries/Database').DatabaseSchema

const models = ['User', 'Problem', 'Submission']

describe('初始化数据库', function () {
  before(function (done) {
    DATABASE.sequelize.authenticate().then(() => done()).catch(done)
  })
  it('Intialize models', function (done) {
    (async () => {
      try {
        for (const model of models) {
          const Model = DATABASE.sequelize.define(model, DatabaseSchema[model])
          await Model.sync({
            force: true
          })
        }
        done()
      } catch (e) {
        done(e)
      }
    })()
  })
})
