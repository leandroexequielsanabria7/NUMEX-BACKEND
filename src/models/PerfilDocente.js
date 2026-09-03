import { DataTypes } from 'sequelize';
import { sequelize } from '../config/database.js';

export const ProfileDocente = sequelize.define('ProfileDocente', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  nombre: {
    type: DataTypes.STRING(100),
    allowNull: false
  },
  apellido: {
    type: DataTypes.STRING(100),
    allowNull: false
  },
  dni: {
    type: DataTypes.STRING(20),
    allowNull: false,
    unique: true
  },
  fecha_nacimiento: {
    type: DataTypes.DATEONLY,
    allowNull: false
  },
  institucion: {
    type: DataTypes.STRING(150),
    allowNull: true
  },
  img_profile: {
    type: DataTypes.STRING(500),
    allowNull: true
  }
}, {
  tableName: 'Perfil_Docente',
  timestamps: false
});