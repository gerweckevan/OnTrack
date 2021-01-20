module.exports = (sequelize, DataTypes) => {
    const Business = sequelize.define("Business_Course", {
      course_name: DataTypes.STRING,
      majorId: DataTypes.STRING,
      type: DataTypes.STRING,
      credits: DataTypes.STRING,
      pre_req: DataTypes.STRING,
      createdAt: {
        type: DataTypes.DATE,
        defaultValue: sequelize.literal("CURRENT_TIMESTAMP"),
      },
      updatedAt: {
        type: DataTypes.DATE,
        defaultValue: sequelize.literal("CURRENT_TIMESTAMP"),
      },
    });
    return Business;
  };
  