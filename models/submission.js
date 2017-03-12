const { Random } = require('mockjs')

const MODELNAME = 'Submission'

module.exports = Object.assign(DATABASE[MODELNAME], {
})

module.exports[Symbol.for('mock')] = () => {
  return {
    problemId: Random.id(),
    userId: Random.id(),
    code: Random.paragraph(),
    type: 'CC'
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
