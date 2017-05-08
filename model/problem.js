export default class Problem {
  static fields (DataTypes) {
    return {
      id: DataTypes.uuid().primary().default(DataTypes.UUIDv1),
      title: DataTypes.string(),
      description: DataTypes.text(),
      lang: DataTypes.string(),
      input: DataTypes.text(),
      output: DataTypes.text(),
      percent: {
        type: DataTypes.FLOAT,
        get () {
          return (this.getDataValue('passCount') / this.getDataValue('submitCount')).toFixed(2)
        }
      },
      sampleInput: DataTypes.string(),
      sampleOutput: DataTypes.string(),
      inputData: DataTypes.text(),
      outputData: DataTypes.text(),
      submitCount: DataTypes.integer(),
      passCount: DataTypes.integer(),
      maxCpuTime: DataTypes.integer().default(1000),
      maxRealTime: DataTypes.integer().default(2000),
      maxMemory: DataTypes.integer().default(1000000000),
      maxProcessNumber: DataTypes.integer().default(200),
      maxOutputSize: DataTypes.integer().default(10000),
      userId: DataTypes.uuid().notNull()
    }
  }

  static random (Random) {
    return {
      title: Random.title(),
      description: Random.paragraph(),
      lang: 'cc',
      input: Random.sentence(),
      output: Random.sentence(),
      sampleInput: Random.sentence(),
      sampleOutput: Random.sentence(),
      inputData: Random.sentence(),
      outputData: Random.sentence(),
      passCount: Random.integer(100, 200),
      submitCount: Random.integer(200, 1000)
    }
  }

  static associate (User) {
    this.belongsTo(User, { as: 'user', foreignKey: 'userId' })
  }
}
