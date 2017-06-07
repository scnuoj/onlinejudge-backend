/// <reference path="./mockjs.d.ts" />
import { Random } from 'mockjs'
import { DataType, Table, Column, Model, PrimaryKey, AutoIncrement, BelongsTo, ForeignKey, HasMany } from 'sequelize-typescript';
import sequelize from '../library/database'
import { User } from './user'
import { Submission } from './submission'

@Table
export class Problem extends Model<Problem> {
    @PrimaryKey
    @AutoIncrement
    @Column
    public id: number

    @Column
    public title: string

    @Column(DataType.TEXT)
    public description: string

    @Column
    public lang: string

    @Column(DataType.TEXT)
    public input: string

    @Column(DataType.TEXT)
    public output

    @Column({
        type: DataType.FLOAT,
        get () {
            return (this.getDataValue('passCount') / this.getDataValue('submitCount')).toFixed(2)
        }
    })
    public percent: number

    @Column
    public sampleInput: string

    @Column
    public sampleOutput: string

    @Column(DataType.TEXT)
    public inputData: string

    @Column(DataType.TEXT)
    public outputData: string

    @Column
    public submitCount: number

    @Column
    public passCount: number

    @Column
    public maxCpuTime: number

    @Column
    public maxRealTime: number

    @Column
    public maxMemory: number

    @Column
    public maxProcessNumber: number

    @Column
    public maxOutputSize: number

    @ForeignKey(() => User)
    @Column(DataType.UUID)
    public userId: string

    @BelongsTo(() => User)
    public user: User

    static mock (item) {
        return {
            avatar: Random.string(),
            email: Random.email(),
            gender: Random.integer(0, 2000),
            name: Random.string(),
            password: Random.string(),
            remark: Random.string(),
            school: Random.string(),
            ...item
        }
    }
}
