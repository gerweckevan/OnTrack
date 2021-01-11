module.exports = (sequelize, DataTypes) => {
    const Course = sequelize.define('Course', {
      name: DataTypes.STRING,
      degreeProgram: DataTypes.STRING,
      type: DataTypes.STRING,
      credits: DataTypes.INTEGER,
      preReq: DataTypes.STRING,
      status: DataTypes.STRING,
      letterGrade: DataTypes.STRING,
    });
    return Course;
  };
  