import * as config from 'config'
import 'reflect-metadata'
import { createConnection } from 'typeorm'


const dbConfig = config.get('Database') as DB

interface DB {
  name: string
  host: string
  port: number
  username: string,
  password: string
}


createConnection({
    driver: {
        type: 'mysql',
        host: dbConfig.host,
        port: dbConfig.port,
        username: dbConfig.username,
        password: dbConfig.password,
        database: dbConfig.name
    },
    entities: [
        __dirname + '/entity/*.js'
    ],
    autoSchemaSync: true,
}).then(connection => {
  global.Database = connection
    // Here you can start to work with your entities
}).catch(error => console.log(error));
