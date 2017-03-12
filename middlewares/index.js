const zlib = require('zlib')
const etag = require('koa-etag')
const json = require('koa-json')
const cors = require('kcors')
const logger = require('koa-logger')
const compose = require('koa-compose')
const compress = require('koa-compress')
const bodyparser = require('koa-bodyparser')
const conditional = require('koa-conditional-get')
const responseTime = require('koa-response-time')
const error = require('./error')
const auth = require('./auth')
/**
 * ## 中间件
 * responseTime => 记录处理时间
 * compress => GZIP 压缩
 * conditional => etag 需要
 * etag => 添加 etag 值
 * json => 返回 json 格式化
 * bodyparser => 解析 post/put/delete 请求的 body
 * logger => 输出日志
 * error => 全局错误处理
 */
module.exports = compose([
  responseTime(),
  cors(),
  compress({
    filter: contentType => /text|application/i.test(contentType),
    threshold: 2048,
    flush: zlib.Z_SYNC_FLUSH
  }),
  conditional(),
  etag(),
  json(),
  bodyparser(),
  logger(),
  auth(),
  error()
])
