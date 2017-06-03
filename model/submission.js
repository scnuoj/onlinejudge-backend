export default class Submission {
  static fields (DataTypes) {
    return {
      id: DataTypes.integer().primary().increase(),
      problemId: DataTypes.uuid().notNull(),
      userId: DataTypes.uuid().notNull(),
      code: DataTypes.text(),
      lang: DataTypes.string(),
      cpuTime: DataTypes.integer(),
      realTime: DataTypes.integer(),
      signal: DataTypes.integer(),
      memory: DataTypes.integer(),
      exitCode: DataTypes.integer(),
      result: DataTypes.integer(),
      error: DataTypes.integer()
    }
  }

  static random (Random) {
    return {
      userId: Random.id(),
      code: Random.paragraph(),
      type: 'cc'
    }
  }

  static associate (Problem, User) {
    this.belongsTo(Problem, { as: 'problem', foreignKey: 'problemId' })
    this.belongsTo(User, { as: 'user', foreignKey: 'userId' })
  }
}
