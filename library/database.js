const Sequelize = require('sequelize')
const databaseConfig = require('config').get('Database')

const sequelize = new Sequelize(databaseConfig.name, databaseConfig.username, databaseConfig.password, {
  host: databaseConfig.host,
  port: databaseConfig.port,
  dialect: databaseConfig.dialect,
  dialectOptions: {
    charset: 'utf8',
    collate: 'utf8_general_ci'
  },
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  },
  logging: false,
  benchmark: false
})

sequelize.authenticate().then(() => {
  console.log('数据库连接成功')
}).catch(e => {
  console.error('数据库连接失败')
  console.log(e)
})

export default sequelize
