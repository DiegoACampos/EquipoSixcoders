const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Courses extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // Courses.hasMany(models.Enrolled, {
      //   foreignKey: 'courseId',
      // });

      models.Enrolled.belongsTo(Courses, {
        foreignKey: 'courseId',
      });

      models.User.hasMany(Courses, {
        foreignKey: 'userId',
      });
    }
  }
  Courses.init({
    title: DataTypes.STRING,
    startDate: DataTypes.DATE,
    endDate: DataTypes.DATE,
    description: DataTypes.STRING,
    price: DataTypes.STRING,
    image: DataTypes.STRING,
    lessons: DataTypes.INTEGER,
    userId: DataTypes.INTEGER,
    deleted: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Courses',
  });
  return Courses;
};
