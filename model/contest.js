export default class Contest {
  static fields (DataTypes) {
    return {
      title: DataTypes.string(),
      content: DataTypes.text(),
      startTime: DataTypes.date(),
      endTime: DataTypes.date(),
      questions: DataTypes.string()
    }
  }

  static random (Random) {
    return {
      title: Random.title(),
      content: Random.paragraph(),
      startTime: Date.now(),
      endTime: Date.now()
    }
  }
}
