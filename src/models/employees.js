import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";



export const employees=sequelize.define('employees', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    firstname: {
      type: DataTypes.STRING,
      allowNull: false
    },
    lastname: {
      type: DataTypes.STRING,
      allowNull: false
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false
    },
    user_uuid: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    other_details: {
      type: DataTypes.TEXT,
      allowNull: true
    }
})