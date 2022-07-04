import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

export const customer_details=sequelize.define('customer_details', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncremet:true
    },
    user_uuid: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    st_customer_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    st_default_payment_method_id: {
      type: DataTypes.STRING,
      allowNull: true
    },
    default_address_uuid: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },})