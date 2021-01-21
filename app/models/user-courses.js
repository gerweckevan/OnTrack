module.exports = (sequelize, DataTypes) => {
    const UserCourses = sequelize.define("User_Course", {
      userId: DataTypes.INTEGER,
      course_name: DataTypes.STRING,
      majorId: DataTypes.STRING,
      type: DataTypes.STRING,
      credits: DataTypes.STRING,
      pre_req: DataTypes.STRING,
      status: { type: DataTypes.BOOLEAN, defaultValue: false },
      letter_grade: { type: DataTypes.STRING, defaultValue: null },
      credits_received: { type: DataTypes.INTEGER, defaultValue: null },
      notes: { type: DataTypes.STRING, defaultValue: null },
      createdAt: {
        type: DataTypes.DATE,
        defaultValue: sequelize.literal("CURRENT_TIMESTAMP"),
      },
      updatedAt: {
        type: DataTypes.DATE,
        defaultValue: sequelize.literal("CURRENT_TIMESTAMP"),
      },
    });
    return UserCourses;
  };
  