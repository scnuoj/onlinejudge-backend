// module.exports = config => new Proxy(config, {
//   get (target, key) {
//     if (typeof target[key] === 'string' && target[key].toUpperCase() === target[key]) {
//       return process.env[target[key]] || target[key]
//     }
//     return target[key]
//   }
// })

module.exports = config => {
  const items = JSON.parse(JSON.stringify(config))
  for (const key in items) {
    if (typeof items[key] === 'string' && items[key].toUpperCase() === items[key]) {
      items[key] = process.env[items[key]] || items[key]
    }
  }
  return items
}
