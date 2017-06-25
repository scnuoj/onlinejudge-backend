import { Submission, User } from 'app/entity'
import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class Problem {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  title: string

  @Column('text')
  description: string

  @Column()
  lang: string

  @Column('text')
  inputData: string

  @Column('text')
  outputData: string

  @Column()
  submitCount: number

  @Column()
  passCount: number

  @Column()
  maxCpuTime: number

  @Column()
  maxRealTime: number

  @Column()
  maxMemory: number

  @Column()
  maxProcessNumber: number

  @Column()
  maxOutputSize: number

  @OneToOne(type => User)
  @JoinColumn()
  user: User

  @OneToMany(type => Submission, submission => submission.problem)
  submissions: Submission[]
}
