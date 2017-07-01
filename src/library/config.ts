/**
 * @file 处理 config 中的环境变量
 */
import * as config from 'config'

const transform = function (obj: object): void {
  for (const key in obj) {
    if (typeof obj[key] === 'string') {
      if (/^ENV:/.test(obj[key])) {
        obj[key] = process.env[obj[key].split(':')[1]]
      }
    } else {
      transform(obj[key])
    }
  }
}

transform(config)
