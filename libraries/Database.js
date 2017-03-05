const Sequelize = require('sequelize')
const databaseConfig = require('config').get('Database')

// 定义 Schema
const DatabaseSchema = {
  User: {
    id: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV1,
      primaryKey: true
    },
    name: {
      type: Sequelize.STRING
    },
    email: {
      type: Sequelize.STRING
    },
    school: {
      type: Sequelize.STRING
    },
    gender: {
      type: Sequelize.INTEGER
    },
    avatar: {
      type: Sequelize.STRING
    },
    remark: {
      type: Sequelize.STRING
    }
  },
  Problem: {
    id: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV1,
      primaryKey: true
    },
    title: {
      type: Sequelize.STRING
    },
    description: {
      type: Sequelize.TEXT
    },
    type: {
      type: Sequelize.STRING
    },
    input: {
      type: Sequelize.STRING
    },
    output: {
      type: Sequelize.STRING
    },
    sampleInput: {
      type: Sequelize.STRING
    },
    sampleOutput: {
      type: Sequelize.STRING
    },
    inputData: {
      type: Sequelize.STRING
    },
    outputData: {
      type: Sequelize.STRING
    },
    submitCount: {
      type: Sequelize.INTEGER
    },
    takeCount: {
      type: Sequelize.INTEGER
    },
    userId: {
      type: Sequelize.UUID,
      allowNull: false
    }
  },
  Submission: {
    id: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV1,
      primaryKey: true
    },
    problemId: {
      type: Sequelize.UUID,
      allowNull: false
    },
    code: {
      type: Sequelize.TEXT
    },
    type: {
      type: Sequelize.STRING
    }
  }
}

// 建立数据库连接
const sequelize = new Sequelize(databaseConfig.name, databaseConfig.username, databaseConfig.password, {
  host: databaseConfig.host,
  dialect: databaseConfig.dialect,
  dialectOptions: {
    charset: 'utf8mb4'
  },
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  },
  logging: false,
  benchmark: false
})

// 连接信息
sequelize.authenticate().then(() => {
  console.log('数据库连接成功')
}).catch(e => {
  console.error('数据库连接失败')
  console.log(e)
})

// 全局变量
const Database = global.DATABASE = {
  sequelize: sequelize,

  Problem: sequelize.define('Problem', DatabaseSchema.Problem),
  Submission: sequelize.define('Submission', DatabaseSchema.Submission),
  User: sequelize.define('User', DatabaseSchema.User)
}

// 建立表之间的关联
Database.Submission.belongsTo(Database.Problem, {
  as: 'problem',
  foreignKey: 'problemId'
})
Database.Problem.belongsTo(Database.User, {
  as: 'user',
  foreignKey: 'userId'
})

module.exports = {
  DatabaseSchema: DatabaseSchema,
  Database: Database
}