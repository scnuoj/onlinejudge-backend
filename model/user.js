export default class User {
  static fields (DataTypes) {
    return {
      id: DataTypes.uuid().primary().default(DataTypes.UUIDv1),
      name: DataTypes.string().notNull(),
      email: DataTypes.string().notNull(),
      password: DataTypes.string().notNull(),
      school: DataTypes.string(),
      gender: DataTypes.integer(),
      avatar: DataTypes.string(),
      remark: DataTypes.string()
    }
  }

  static random (Random) {
    return {
      name: Random.name(),
      email: Random.email(),
      password: Random.word(10),
      school: Random.word(),
      gender: Random.integer(0, 1),
      avatar: Random.image('100x100'),
      remark: Random.sentence()
    }
  }
}
