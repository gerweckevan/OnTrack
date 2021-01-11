module.exports = (sequelize, DataTypes) => {
    const Course = sequelize.define('Course', {
      name: DataTypes.STRING,
      degree_program: DataTypes.STRING,
      type: DataTypes.STRING,
      credits: DataTypes.STRING,
      pre_req: DataTypes.STRING,
      status: {type: DataTypes.STRING, defaultValue: "Not Complete"},
      letter_grade: {type: DataTypes.STRING, defaultValue: null},
      credits_received: {type: DataTypes.INTEGER, defaultValue: null},
      notes: {type: DataTypes.STRING, defaultValue: null},
      createdAt: {type: DataTypes.DATE, defaultValue: sequelize.literal('CURRENT_TIMESTAMP')},
      updatedAt: {type: DataTypes.DATE, defaultValue: sequelize.literal('CURRENT_TIMESTAMP')},
    });
    return Course;
  };
  