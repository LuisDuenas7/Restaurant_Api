import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
import {customer_details} from "./customer_details.js";

export const customer_addresses=sequelize.define('customer_addresses', {
    id: {
      type:DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncremet:true
    },
    line_1: {
      type: DataTypes.STRING,
      allowNull: false
    },
    line_2: {
      type: DataTypes.STRING,
      allowNull: true
    },
    line_3: {
      type: DataTypes.STRING,
      allowNull: true
    },
    line_4: {
      type: DataTypes.STRING,
      allowNull: true
    },
    city: {
      type: DataTypes.STRING,
      allowNull: false
    },
    zip_postcode: {
      type: DataTypes.STRING,
      allowNull: false
    },
    state_province: {
      type: DataTypes.STRING,
      allowNull: false
    },
    country: {
      type: DataTypes.STRING,
      allowNull: false
    },
    longitude: {
      type: DataTypes.REAL,
      allowNull: true
    },
    latitude: {
      type: DataTypes.REAL,
      allowNull: true
    },
    other_details: {
      type: DataTypes.TEXT,
      allowNull: true
    },
})   

// ==========Relations======Customer details=====================

customer_addresses.hasMany(customer_details, {  
    foreignKey: "default_address_uuid",
    targetId:'id'
});
customer_details.belongsTo(customer_addresses, { 
    foreignKey: "default_address_uuid",
    sourceKey:'id'
});