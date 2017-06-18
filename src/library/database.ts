import * as config from 'config'
import * as path from 'path'
import 'reflect-metadata'
import { Sequelize } from 'sequelize-typescript'

import { Problem } from 'app/model/Problem'
import { Submission } from 'app/model/Submission'
import { User } from 'app/model/User'
import { IDatabaseConfig } from 'app/typing/config'

const dbConfig = <IDatabaseConfig>config.get('Database')

export const database = new Sequelize({
  name: dbConfig.name,
  dialect: 'mysql',
  host: dbConfig.host,
  port: dbConfig.port,
  username: dbConfig.username,
  password: dbConfig.password
})

database.addModels([ Submission, Problem, User ])
