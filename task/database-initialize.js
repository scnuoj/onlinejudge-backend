const DatabaseSchema = require('../library/Database').DatabaseSchema

const models = ['Problem', 'User', 'Submission']

describe('初始化数据库', function () {
  before(function (done) {
    DATABASE.sequelize.authenticate().then(result => done()).catch(done)
  })
  it('Intialize models', function (done) {
    (async () => {
      try {
        for (let model of models) {
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
