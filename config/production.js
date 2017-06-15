module.exports = {
  Database: {
    name: process.env.DB_NAME,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: 'mysql',
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD
  },
  Cache: {
    host: process.env.RE_HOST,
    port: process.env.RE_PORT,
    auth: process.env.RE_AUTH,
    db: 0,
    prefix: 'onlinejudge-cache'
  },
  Queue: {
    host: process.env.RE_HOST,
    port: process.env.RE_PORT,
    auth: process.env.RE_AUTH,
    db: 1,
    prefix: 'onlinejudge-queue'
  },
  Jwt: {
    secret: process.env.JWT_SECRET,
    algorithm: process.env.JWT_ALGORITHM,
    exp: process.env.JWT_EXP
  },
  Env: 'production',
  port: 8000
}
