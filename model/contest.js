const { Random } = require('mockjs')
const baseModel = require('../extend/model')

module.exports = Object.assign(Database.Contest, baseModel, {
  random () {
    return {
      title: Random.title(),
      content: Random.paragraph(),
      startTime: Date.now(),
      endTime: Date.now()
    }
  }
})
