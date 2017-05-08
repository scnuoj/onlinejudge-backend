export default class Discussion {
  static fields (DataTypes) {
    return {
      title: DataTypes.string(),
      content: DataTypes.text(),
      userId: DataTypes.uuid(),
      problemId: DataTypes.uuid()
    }
  }

  static random (Random) {
    return {
      title: Random.title(),
      content: Random.paragraph()
    }
  }

  static associate (User, Problem) {
    this.belongsTo(User, { as: 'user', foreignKey: 'userId' })
    this.belongsTo(Problem, { as: 'problem', foreignKey: 'problemId' })
  }
}
