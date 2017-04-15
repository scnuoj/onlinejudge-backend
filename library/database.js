const Sequelize = require('sequelize')
const humps = require('humps')
const databaseConfig = require('../helper/env')(require('config').get('Database'))

// 定义 Schema
const DatabaseSchema = {
  User: {
    // 用户昵称
    name: {
      type: Sequelize.STRING,
      allowNull: false
    },
    // 用户邮箱
    email: {
      type: Sequelize.STRING,
      allowNull: false
    },
    // 用户密码
    password: {
      type: Sequelize.STRING,
      allowNull: false
    },
    // 用户学校
    school: {
      type: Sequelize.STRING
    },
    // 用户性别
    gender: {
      type: Sequelize.INTEGER
    },
    // 用户头像
    avatar: {
      type: Sequelize.STRING
    },
    // 用户备注
    remark: {
      type: Sequelize.STRING
    }
  },
  Problem: {
    // 问题标题
    title: {
      type: Sequelize.STRING
    },
    // 问题描述
    description: {
      type: Sequelize.TEXT
    },
    // 问题所属语言
    lang: {
      type: Sequelize.STRING
    },
    // 问题输入描述
    input: {
      type: Sequelize.TEXT
    },
    // 问题输出描述
    output: {
      type: Sequelize.TEXT
    },
    // 测试输入
    sampleInput: {
      type: Sequelize.STRING
    },
    // 测试输出
    sampleOutput: {
      type: Sequelize.STRING
    },
    // 判题用的测试输入数据(用于生成下面的测试输出数据)
    inputData: {
      type: Sequelize.TEXT
    },
    // 判题用的测试输出数据(用于和用户输入产生结果进行比较)
    outputData: {
      type: Sequelize.TEXT
    },
    // 提交次数
    submitCount: {
      type: Sequelize.INTEGER
    },
    // 通过次数
    passCount: {
      type: Sequelize.INTEGER
    },
    percent: {
      type: Sequelize.FLOAT,
      get: function () {
        return (this.getDataValue('passCount') / this.getDataValue('submitCount')).toFixed(2)
      }
    },
    // 最大 CPU 运行时间
    maxCpuTime: {
      type: Sequelize.INTEGER,
      defaultValue: 1000
    },
    // 实际最大运行时间(这个和上面那个判断是否超时)
    maxRealTime: {
      type: Sequelize.INTEGER,
      defaultValue: 2000
    },
    // 最大内存使用量(判断内存是否超出限制)
    maxMemory: {
      type: Sequelize.INTEGER,
      defaultValue: 1000000000
    },
    // 最大进程数
    maxProcessNumber: {
      type: Sequelize.INTEGER,
      defaultValue: 200
    },
    // 最大输出(防止恶意输出)
    maxOutputSize: {
      type: Sequelize.INTEGER,
      defaultValue: 10000
    },
    // 题目创建者 ID, 外键
    userId: {
      type: Sequelize.UUID,
      allowNull: false
    }
  },
  Submission: {
    // 对应的问题 ID, 外键
    problemId: {
      type: Sequelize.UUID,
      allowNull: false
    },
    // 提交人 ID, 外键
    userId: {
      type: Sequelize.UUID,
      allowNull: false
    },
    // 提交的代码
    code: {
      type: Sequelize.TEXT
    },
    // 提交的代码类型
    lang: {
      type: Sequelize.STRING
    },
    // 代码运行 CPU 时间
    cpuTime: {
      type: Sequelize.INTEGER
    },
    // 代码运行实际时间
    realTime: {
      type: Sequelize.INTEGER
    },
    // 代码运行状态标志
    signal: {
      type: Sequelize.INTEGER
    },
    // 代码运行使用内存
    memory: {
      type: Sequelize.INTEGER
    },
    // 代码运行的退出状态码
    exitCode: {
      type: Sequelize.INTEGER
    },
    // 代码运行结果
    result: {
      type: Sequelize.INTEGER
    },
    // 代码运行错误
    error: {
      type: Sequelize.INTEGER
    }
  },
  Contest: {
    // 比赛标题
    title: {
      type: Sequelize.STRING
    },
    // 比赛正文信息
    content: {
      type: Sequelize.TEXT
    },
    // 比赛开始时间
    startTime: {
      type: Sequelize.DATE
    },
    // 比赛截止时间
    endTime: {
      type: Sequelize.DATE
    },
    // 比赛题目(序列化题目ID)
    questions: {
      type: Sequelize.STRING
    }
  },
  Post: {
    // 文章标题
    title: {
      type: Sequelize.STRING
    },
    // 文章正文
    content: {
      type: Sequelize.TEXT
    },
    // 作者
    userId: {
      type: Sequelize.UUID
    },
    // 问题
    problemId: {
      type: Sequelize.UUID
    }
  },
  Discussion: {
    // 讨论标题
    title: {
      type: Sequelize.STRING
    },
    // 讨论内容
    content: {
      type: Sequelize.TEXT
    },
    // 作者
    userId: {
      type: Sequelize.UUID
    },
    // 问题
    problemId: {
      type: Sequelize.UUID
    }
  }
}

// camelCaseToUnderscored
for (const schema of Object.values(DatabaseSchema)) {
  for (const key in schema) {
    const camel = humps.decamelize(key)
    if (camel !== key) schema[key]['field'] = camel
  }
}

// 建立数据库连接
const sequelize = new Sequelize(databaseConfig.name, databaseConfig.username, databaseConfig.password, {
  host: databaseConfig.host,
  port: databaseConfig.port,
  dialect: databaseConfig.dialect,
  dialectOptions: {
    charset: 'utf8',
    collate: 'utf8_general_ci'
  },
  define: {
    underscored: true,
    underscoredAll: true
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
sequelize.authenticate().catch(e => {
  console.error('数据库连接失败')
  console.log(e)
})

const Database = global.Database = {}
Object.keys(DatabaseSchema).forEach(key => {
  DatabaseSchema[key] = Object.assign({
    id: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV1,
      primaryKey: true
    }
  }, DatabaseSchema[key])
  Database[key] = sequelize.define(key, DatabaseSchema[key])
})

if (!process.env.mock) {
  // 建立表之间的关联
  Database.Submission.belongsTo(Database.Problem, {
    as: 'problem',
    foreignKey: 'problemId'
  })
  Database.Submission.belongsTo(Database.User, {
    as: 'user',
    foreignKey: 'userId'
  })
  Database.Problem.belongsTo(Database.User, {
    as: 'user',
    foreignKey: 'userId'
  })
  Database.Post.belongsTo(Database.User, {
    as: 'user',
    foreignKey: 'userId'
  })
  Database.Post.belongsTo(Database.Problem, {
    as: 'problem',
    foreignKey: 'problemId'
  })
  Database.Discussion.belongsTo(Database.User, {
    as: 'user',
    foreignKey: 'userId'
  })
  Database.Discussion.belongsTo(Database.Problem, {
    as: 'problem',
    foreignKey: 'problemId'
  })
}

// 读取 model
require('require-dir')('../model')

module.exports = global.Database = Object.assign(sequelize, Database)
