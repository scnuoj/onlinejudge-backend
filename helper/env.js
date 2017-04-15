module.exports = config => new Proxy(config, {
  get (target, key) {
    if (typeof target[key] === 'string' && target[key].toUpperCase() === target[key]) {
      return process.env[target[key]] || target[key]
    }
    return target[key]
  }
})
