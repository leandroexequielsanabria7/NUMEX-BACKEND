import { DataTypes } from 'sequelize';
import { sequelize } from '../config/database.js';

export const User = sequelize.define('User', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  User_Name: {
    type: DataTypes.STRING(100),
    allowNull: false
  },
  correo: {
    type: DataTypes.STRING(150),
    allowNull: false,
    unique: true,
    validate: { isEmail: true }
  },
  contrasena: {
    type: DataTypes.STRING(255),
    allowNull: false
  },
  url_profile_img: {
    type: DataTypes.STRING(500),
    allowNull: true
  }
}, {
  tableName: 'usuarios',
  timestamps: false
});