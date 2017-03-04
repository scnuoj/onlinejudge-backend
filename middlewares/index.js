const zlib = require('zlib')
const etag = require('koa-etag')
const json = require('koa-json')
const cors = require('kcors')
const logger = require('koa-logger')
const compose = require('koa-compose')
const compress = require('koa-compress')
const bodyparser = require('koa-bodyparser')
const conditional = require('koa-conditional-get')
const cacheControl = require('koa-cache-control')
const cache = require('./cache')
const error = require('./error')
/**
 * ## 中间件
 * compress => GZIP 压缩
 * conditional => etag 需要
 * etag => 添加 etag 值
 * json => 返回 json 格式化
 * cacheControl => 200 缓存
 * bodyparser => 解析 post/put/delete 请求的 body
 * logger => 输出日志
 */
module.exports = compose([
  cors(),
  compress({
    filter: contentType => /text|application/i.test(contentType),
    threshold: 2048,
    flush: zlib.Z_SYNC_FLUSH
  }),
  conditional(),
  etag(),
  json(),
  cacheControl(),
  bodyparser(),
  logger(),
  cache(),
  error()
])
