import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn } from 'typeorm'
import { Problem } from './problem'
import { User } from './user'

@Entity()
export class Submission {
  @PrimaryGeneratedColumn()
  id: number

  @OneToOne(type => Problem)
  @JoinColumn()
  problemId: number

  @OneToOne(type => User)
  @JoinColumn()
  userId: string

  @Column('text')
  code: string

  @Column()
  lang: string

  @Column('int')
  cpuTime: number

  @Column('int')
  realTime: number

  @Column()
  signal: number

  @Column('int')
  memory: number

  @Column()
  exitCode: number

  @Column()
  result: number

  @Column()
  error: number

}
