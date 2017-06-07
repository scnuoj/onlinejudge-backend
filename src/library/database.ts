import * as path from 'path'
import * as config from 'config'
import 'reflect-metadata'
import { Sequelize } from 'sequelize-typescript'

import { User } from '../model/user'
import { Submission } from '../model/submission'
import { Problem } from '../model/problem'


const dbConfig = config.get('Database') as DB

export interface DB {
  name: string
  host: string
  port: number
  username: string,
  password: string
}

console.log(dbConfig)

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

sequelize.authenticate().then(async db => {
  console.log('DB SUCCESS')
})

export default sequelize
