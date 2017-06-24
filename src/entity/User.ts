import { Problem, Submission } from 'app/entity'
import { Exclude } from 'class-transformer'
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  name: string

  @Column()
  email: string

  @Exclude()
  @Column()
  password: string

  @Column({ nullable: true })
  school: string

  @Column({ nullable: true })
  gender: number

  @Column({ nullable: true })
  avatar: string

  @Column({ nullable: true })
  remark: string

  @OneToMany(type => Problem, problem => problem.user)
  problems: Problem[]

  @OneToMany(type => Submission, submission => submission.user)
  submissions: Submission[]
}
