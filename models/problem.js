const { Random } = require('mockjs')

const MODELNAME = 'Problem'

module.exports = Object.assign(DATABASE[MODELNAME], {
})

module.exports[Symbol.for('mock')] = () => {
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
    submitCount: Random.integer(200, 1000),
    userId: Random.id()
  }
}

module.exports[Symbol.for('create')] = async function (obj) {
  const ret = []
  for (const obj of Array.from(arguments)) {
    const defaultData = await this[Symbol.for('mock')]()
    const model = await this.create(Object.assign(defaultData, obj))
    ret.push(model)
  }
  return ret
}
