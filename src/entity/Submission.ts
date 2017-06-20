import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn, OneToMany } from 'typeorm'
import { User } from 'app/entity/User'
import { Problem } from 'app/entity/Problem'

@Entity()
export class Submission {
  @PrimaryGeneratedColumn()
  id: number

  @Column('TEXT')
  code: string

  @Column()
  lang: string

  @Column()
  cpuTime: number

  @Column()
  realTime: number

  @Column()
  signal: number

  @Column()
  memory: number

  @Column()
  exitCode: number

  @Column()
  result: number

  @Column()
  error: number

  @OneToOne(type => Problem)
  @JoinColumn()
  problem: Problem

  @OneToOne(type => User)
  @JoinColumn()
  user: User
}
