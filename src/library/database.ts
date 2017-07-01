import * as config from 'config'
import * as path from 'path'
import 'reflect-metadata'
import { createConnection, Connection } from 'typeorm'

const dbConfig = config.database

const root = path.resolve(__dirname, '..')
const entityPath = `${root}/entity/*.{js,ts}`
const migrationPath = `${root}/migration/*.{js,ts}`

export const database: () => Promise<Connection> = () => createConnection({
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
  autoMigrationsRun: true,
  logging: true
})
