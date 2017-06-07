import { Table, Column, Model, PrimaryKey, AutoIncrement, BelongsTo, ForeignKey, HasMany } from 'sequelize-typescript';
import sequelize from '../library/database'
import { DataTypes } from 'sequelize'
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

    @Column(DataTypes.TEXT)
    public description: string

    @Column
    public lang: string

    @Column(DataTypes.TEXT)
    public input: string

    @Column(DataTypes.TEXT)
    public output

    @Column({
        type: DataTypes.FLOAT,
        get () {
            return (this.getDataValue('passCount') / this.getDataValue('submitCount')).toFixed(2)
        }
    })
    public percent: number

    @Column
    public sampleInput: string

    @Column
    public sampleOutput: string

    @Column(DataTypes.TEXT)
    public inputData: string

    @Column(DataTypes.TEXT)
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
    @Column(DataTypes.UUID)
    public userId: string

    @BelongsTo(() => User)
    public user: User
}
