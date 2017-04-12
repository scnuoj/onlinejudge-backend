const config = require('config')
const errors = require('./error')

module.exports = class Service {
  constructor () {
    // 直接通过 this.config 读取配置
    this.config = config
    // 直接通过 this.errorName 读取自定义错误
    Object.keys(errors).forEach(errorName => {
      this[errorName] = errors[errorName]
    })
  }
}
