import { Random } from 'mockjs'
import { AutoIncrement, BelongsTo, Column, DataType, ForeignKey, Model, PrimaryKey, Table } from 'sequelize-typescript'
import { Problem } from './problem'
import { User } from './user'

@Table
export class Submission extends Model<Submission> {
  @PrimaryKey
  @AutoIncrement
  @Column
  public id: number

  @ForeignKey(() => Problem)
  public problemId: number

  @BelongsTo(() => Problem, 'problemId')
  public problem: Problem

  @ForeignKey(() => User)
  public userId: string

  @BelongsTo(() => User, 'userId')
  public user: User

  @Column(DataType.TEXT)
  public code: string

  @Column
  public lang: string

  @Column
  public cpuTime: number

  @Column
  public realTime: number

  @Column
  public signal: number

  @Column
  public memory: number

  @Column
  public exitCode: number

  @Column
  public result: number

  @Column
  public error: number

  static mock (item?: object) {
    return {
      code: Random.paragraph(),
      cpuTime: Random.integer(0, 2000),
      error: Random.integer(0, 2000),
      exitCode: Random.integer(0, 2000),
      lang: 'C',
      memory: Random.integer(0, 2000),
      realTime: Random.integer(0, 2000),
      result: Random.integer(0, 2000),
      signal: Random.integer(0, 2000),
      ...item
    }
  }
}
