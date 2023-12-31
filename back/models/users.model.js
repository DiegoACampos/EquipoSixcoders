const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.Roles.hasMany(User, {
        foreignKey: 'rolId',
      });

      // models.Enrolled.hasMany(User, {
      //   foreignKey: 'userId',
      // });
      // User.hasMany(models.Enrolled, {
      //   foreignKey: 'userId',
      // });
    }
  }
  User.init({
    name: DataTypes.STRING,
    lastname: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    rolId: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};
