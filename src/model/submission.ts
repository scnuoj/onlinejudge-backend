/// <reference path="./mockjs.d.ts" />
import { Random } from 'mockjs'
import { DataType, Table, Column, Model, PrimaryKey, AutoIncrement, BelongsTo, ForeignKey } from 'sequelize-typescript';
import { User } from './user'
import { Problem } from './problem'

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

  static mock (item) {
    return {
      description: Random.paragraph(),
      title: Random.string(),
      lang: Random.string(),
      input: Random.string(),
      output: Random.string(),
      percent: Random.float(),
      sampleInput: Random.string(),
      sampleOutput: Random.string(),
      submitCount: Random.integer(100, 200),
      passCount: Random.integer(10, 20),
      maxCpuTime: Random.integer(1000, 2000),
      maxRealTime: Random.integer(1000, 2000),
      maxMemory: Random.integer(1000, 2000),
      maxProcessNumber: Random.integer(1000, 2000),
      maxOutputSize: Random.integer(1000, 2000),
      inputData: Random.string(),
      outputData: Random.string(),
      ...item,
    }
  }
}
