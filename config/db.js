// config/db.js
const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize(
  "todoapp", // DB_NAME
  "postgres", // DB_USER
  "14122000", // DB_PASSWORD
  {
    host: "localhost", // DB_HOST
    port: 5432, // DB_PORT
    dialect: "postgres", // DB_DIALECT
  }
);

const Task = sequelize.define(
  "Task",
  {
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    time: {
      type: DataTypes.TIME,
      allowNull: false,
    },
    color: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    is_checked: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
  },
  {
    tableName: "tasks", // Nama tabel di database
    timestamps: true,
  }
);

module.exports = { sequelize, Task };
