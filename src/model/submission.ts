import { Table, Column, Model, PrimaryKey, AutoIncrement, BelongsTo, ForeignKey } from 'sequelize-typescript';
import sequelize from '../library/database'
import { DataTypes } from 'sequelize'
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

  @Column(DataTypes.TEXT)
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
}
