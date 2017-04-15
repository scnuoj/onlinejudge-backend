const { Random } = require('mockjs')
const baseModel = require('../extend/model')

module.exports = Object.assign(Database.Submission, baseModel, {
  random () {
    return {
      userId: Random.id(),
      code: Random.paragraph(),
      type: 'cc'
    }
  }
})
