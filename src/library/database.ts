import * as config from 'config'
import * as path from 'path'
import 'reflect-metadata'
import { Sequelize } from 'sequelize-typescript'

import { Problem } from '../model/problem'
import { Submission } from '../model/submission'
import { User } from '../model/user'

const dbConfig = config.get('Database') as DB

export interface DB {
  name: string
  host: string
  port: number
  username: string,
  password: string
}

const sequelize = new Sequelize({
  name: dbConfig.name,
  dialect: 'mysql',
  host: dbConfig.host,
  port: dbConfig.port,
  username: dbConfig.username,
  password: dbConfig.password,
  modelPaths: [
    path.resolve(__dirname, '..', 'model')
  ]
})

sequelize.addModels([ Submission, Problem, User ])

export default sequelize
