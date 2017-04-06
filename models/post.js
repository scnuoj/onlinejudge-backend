const { Random } = require('mockjs')

module.exports = Object.assign(DATABASE['Post'], {
})

module.exports[Symbol.for('mock')] = () => {
  return {
    title: Random.title(),
    content: Random.paragraph()
  }
}

module.exports[Symbol.for('create')] = async function (...items) {
  return await Promise.all(items.map(item => {
    return this.create(Object.assign(this[Symbol.for('mock')](), item)).bind(this)
  }))
}
