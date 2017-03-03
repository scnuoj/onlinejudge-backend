/*
 global DATABASE
 */
const _ = require('lodash')
module.exports = function (modelName) {
  return _.assign(DATABASE[modelName], {
    updateOne: async (id, values) => {
      let result = await this.update(values, {
        where: {
          id: id
        }
      })
      return result[0] === 1
    }
  })
}
