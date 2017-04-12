const { Random } = require('mockjs')
const baseModel = require('../extend/model')

module.exports = Object.assign(Database.Problem, baseModel, {
  random () {
    return {
      title: Random.title(),
      description: Random.paragraph(),
      lang: 'cc',
      input: Random.sentence(),
      output: Random.sentence(),
      sampleInput: Random.sentence(),
      sampleOutput: Random.sentence(),
      inputData: Random.sentence(),
      outputData: Random.sentence(),
      passCount: Random.integer(100, 200),
      submitCount: Random.integer(200, 1000)
    }
  }
})
