const BaseModel = require('../helpers/baseModel.js')
const { Random } = require('mockjs')

const MODELNAME = 'Problem'

module.exports = Object.assign(BaseModel(MODELNAME), {

})

module.exports[Symbol.for('mock')] = () => {
  return {
    id: Random.id(),
    title: Random.title(),
    description: Random.paragraph(),
    type: Random.word(),
    input: Random.sentence(),
    output: Random.sentence(),
    sampleInput: Random.sentence(),
    sampleOutput: Random.sentence(),
    inputData: Random.sentence(),
    outputData: Random.sentence(),
    submitCount: Random.integer(0, 10),
    takeCount: Random.integer(0, 10)
  }
}

module.exports[Symbol.for('create')] = async function (obj) {
  const ret = []
  for (let obj of Array.from(arguments)) {
    const defaultData = await this[Symbol.for('mock')]()
    const model = await this.create(Object.assign(defaultData, obj))
    ret.push(model)
  }
  return ret
}
