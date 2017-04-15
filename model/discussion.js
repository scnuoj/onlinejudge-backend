const { Random } = require('mockjs')
const baseModel = require('../extend/model')

module.exports = Object.assign(Database.Discussion, baseModel, {
  random () {
    return {
      title: Random.title(),
      content: Random.paragraph()
    }
  }
})
