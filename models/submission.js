const { Random } = require('mockjs')

module.exports = Object.assign(DATABASE['Submission'], {
})

module.exports[Symbol.for('mock')] = () => {
  return {
    problemId: Random.id(),
    userId: Random.id(),
    code: Random.paragraph(),
    type: 'cc'
  }
}

module.exports[Symbol.for('create')] = async function (...items) {
  return await Promise.all(items.map(item => {
    return this.create(Object.assign(this[Symbol.for('mock')](), item)).bind(this)
  }))
}
