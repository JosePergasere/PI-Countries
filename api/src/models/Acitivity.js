const { DataTypes } = require("sequelize");
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    "Activity",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      difficulty: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          min: 1,
          max: 5,
        },
      },
      duration: {
        type: DataTypes.FLOAT,
        validate: {
          min: 0,
        },
        allowNull: true,
      },
      season: {
        type: DataTypes.ENUM("Summer", "Winter", "Spring", "Autumn"),
        allowNull: false,
      },
    },
    { timestamps: false }
  );
};
