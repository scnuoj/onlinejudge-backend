import * as config from 'config'
import * as path from 'path'
import 'reflect-metadata'
import { Sequelize } from 'sequelize-typescript'

import { Problem } from 'app/model/Problem'
import { Submission } from 'app/model/Submission'
import { User } from 'app/model/User'
import { IDatabaseConfig } from 'app/typing/config'
import { Connection, createConnection } from 'typeorm'

const dbConfig = <IDatabaseConfig>config.get('Database')

import { Problem as TProblem } from 'app/entity/Problem'
import { Submission as TSubmission } from 'app/entity/Submission'
import { User as TUser } from 'app/entity/User'

const root = path.resolve(__dirname, '..')
const entityPath = `${root}/entity/*.js`
const migrationPath = `${root}/migration/*.js`

export const database = () => createConnection({
  type: 'mysql',
  host: dbConfig.host,
  port: dbConfig.port,
  username: dbConfig.username,
  password: dbConfig.password,
  database: dbConfig.name,
  entities: [ entityPath ],
  migrations: [ migrationPath ],
  cli: {
    migrationsDir: `${root}/migration`
  },
  autoSchemaSync: true,
  autoMigrationsRun: true
})
