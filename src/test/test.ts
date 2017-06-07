import * as glob from 'glob'
import { suite, test } from 'mocha-typescript'
import { app, db } from '../'

@suite class Test {
  async before () {
    await db.authenticate(app.listen)
    const controllers = glob.sync(`${__dirname}/{controller}/**/*.{js,ts}`)
    controllers.forEach(controller => require(controller))
  }
}
