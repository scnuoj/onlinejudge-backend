module.exports = {
  database: {
    name: process.env.DB_NAME,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: 'mysql',
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD
  },
  cache: {
    host: process.env.RE_HOST,
    port: process.env.RE_PORT,
    password: process.env.RE_PASSWORD,
    db: 0,
    prefix: 'onlinejudge-cache'
  },
  queue: {
    host: process.env.RE_HOST,
    port: process.env.RE_PORT,
    password: process.env.RE_PASSWORD,
    db: 1,
    prefix: 'onlinejudge-queue'
  },
  jwt: {
    secret: process.env.JWT_SECRET,
    algorithm: process.env.JWT_ALGORITHM,
    exp: process.env.JWT_EXP
  },
  env: 'production',
  port: 8000
}
