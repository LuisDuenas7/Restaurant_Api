import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
import {roles} from './roles.js'
import {employees} from './employees.js'
import {customer_addresses} from './customer_addresses.js'
import {customer_details} from './customer_details.js'


export const users=  sequelize.define('users', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement:true
    },
    fistname: {
      type: DataTypes.STRING,
      allowNull: false
    },
    lastname: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: "users_email_key"
    },
    telephone: {
      type: DataTypes.STRING,
      allowNull: false
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    verified: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    active: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true
    },
  })


  // ===================Relations====Customer_Addresses======================


  users.hasMany(customer_addresses, {
      foreignKey: "user_uuid",
      sourceKey:'id'});
  customer_details.belongsTo(users, {
      foreignKey: "user_uuid",
      targetID:'id'});
  
      // ===========Relations====Customer_details=================== 


users.hasMany(customer_details, { 
  foreignKey: "user_uuid",
  sourceKey:'id'
});
customer_details.belongsTo(users, {
   foreignKey: "user_uuid",
   targetId:'id'
  });
 
// ==============Relations======employees==========================================
  users.hasMany(employees, { 
    foreignKey: "user_uuid",
    targetId:'id'
  });

employees.belongsTo(users, { 
  foreignKey: "user_uuid",
  sourceKey:'id'
});

// ================Relations========Roles==============================

roles.hasMany(users, { 
  foreignKey: "role_id",
  targetId:'id'
});

  users.belongsTo(roles, { 
  foreignKey: "role_id",
  sourceKey:'id'
  });

  // ===========Relation=========Employes============================


  