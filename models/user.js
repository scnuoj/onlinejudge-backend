const { Random } = require('mockjs')

module.exports = Object.assign(DATABASE['User'], {
})

module.exports[Symbol.for('mock')] = () => {
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

module.exports[Symbol.for('create')] = async function (...items) {
  return await Promise.all(items.map(item => {
    return this.create(Object.assign(this[Symbol.for('mock')](), item)).bind(this)
  }))
}
