module.exports = function (modelName) {
  return Object.assign(DATABASE[modelName], {
    updateOne: async (id, values) => {
      const result = await this.update(values, {
        where: {
          id: id
        }
      })
      return result[0] === 1
    }
  })
}
