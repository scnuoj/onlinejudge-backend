const { Random } = require('mockjs')
const baseModel = require('../extend/model')

module.exports = Object.assign(Database.User, baseModel, {
  random () {
    return {
      name: Random.name(),
      email: Random.email(),
      password: Random.word(10),
      school: Random.word(),
      gender: Random.integer(0, 1),
      avatar: Random.image('100x100'),
      remark: Random.sentence()
    }
  }
})
