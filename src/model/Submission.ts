import { Problem } from 'app/model/Problem'
import { User } from 'app/model/User'
import { Random } from 'mockjs'
import { AutoIncrement, BelongsTo, Column, DataType, ForeignKey, Model, PrimaryKey, Table } from 'sequelize-typescript'

enum RunError {
  SUCCESS = 0,
  INVALID_CONFIG = -1,
  FORK_FAILED = -2,
  PTHREAD_FAILED = -3,
  WAIT_FAILED = -4,
  ROOT_REQUIRED = -5,
  LOAD_SECCOMP_FAILED = -6,
  SETRLIMIT_FAILED = -7,
  DUP2_FAILED = -8,
  SETUID_FAILED = -9,
  EXECVE_FAILED = -10,
  SPJ_ERROR = -11
}

enum RunResult {
  SUCCESS = 0,
  CPU_TIME_LIMIT_EXCEEDED = 1,
  REAL_TIME_LIMIT_EXCEEDED = 2,
  MEMORY_LIMIT_EXCEEDED = 3,
  RUNTIME_ERROR = 4,
  SYSTEM_ERROR = 5
}

@Table({
  tableName: 'submission'
})
export class Submission extends Model<Submission> {
  @PrimaryKey
  @AutoIncrement
  @Column
  public id: number

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

  @ForeignKey(() => Problem)
  public problemId: number

  @BelongsTo(() => Problem, 'problemId')
  public problem: Problem

  @ForeignKey(() => User)
  public userId: string

  @BelongsTo(() => User, 'userId')
  public user: User

  public static MOCK_DATA (item?: {}): {} {
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
