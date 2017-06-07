import { assert } from 'chai'
import { suite, test } from 'mocha-typescript'
import * as request from 'supertest'
import { Problem } from '../../model/problem'

@suite class Problems {
  async before () {
    await Problem.create<Problem>(Problem.mock())
  }

  @test async index () {
    const res = await request()
  }
}
