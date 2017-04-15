module.exports = {
  async mock (...items) {
    return await Promise.all(items.map(item => {
      return this.create(Object.assign(this.random(), item))
    }))
  }
}
