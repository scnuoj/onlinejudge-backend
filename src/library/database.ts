import * as config from 'config'
import * as path from 'path'
import 'reflect-metadata'
import { IDatabaseConfig } from 'app/typing/config'
import { createConnection, Connection } from 'typeorm'

const dbConfig = config.get('Database') as IDatabaseConfig

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
  autoMigrationsRun: true
})
