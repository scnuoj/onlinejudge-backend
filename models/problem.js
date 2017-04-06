const { Random } = require('mockjs')

module.exports = Object.assign(DATABASE['Problem'], {
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

module.exports[Symbol.for('create')] = async function (...items) {
  return await Promise.all(items.map(item => {
    return this.create(Object.assign(this[Symbol.for('mock')](), item)).bind(this)
  }))
}
