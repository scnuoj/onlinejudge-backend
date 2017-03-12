const { Random } = require('mockjs')
const uuid = require('uuid')

const MODELNAME = 'Submission'

module.exports = Object.assign(DATABASE[MODELNAME], {
})

module.exports[Symbol.for('mock')] = () => {
  return {
    id: uuid.v1(),
    problemId: Random.id(),
    userId: Random.id(),
    code: Random.paragraph(),
    type: 'cc'
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
