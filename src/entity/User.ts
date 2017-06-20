import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn, OneToMany } from 'typeorm'
import { Submission } from 'app/entity/Submission'
import { Problem } from 'app/entity/Problem'

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  name: string

  @Column()
  email: string

  @Column()
  password: string

  @Column()
  school: string

  @Column()
  gender: number

  @Column()
  avatar: string

  @Column()
  remark: string

  @OneToMany(type => Problem, problem => problem.user)
  problems: Problem[]

  @OneToMany(type => Submission, submission => submission.user)
  submissions: Submission[]
}
