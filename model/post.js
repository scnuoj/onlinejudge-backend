export default class Post {
  static fields (DataTypes) {
    return {
      id: DataTypes.integer().primary().increase(),
      title: DataTypes.string(),
      content: DataTypes.text(),
      userId: DataTypes.uuid(),
      problemId: DataTypes.integer()
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
