import { DataTypes } from 'sequelize';
import { sequelize } from '../config/database.js';

export const PerfilAlumno = sequelize.define('PerfilAlumno', {
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
    allowNull: false
    unique: true
  },
  curso: {
    type: DataTypes.STRING(20),
    allowNull: false,
    unique: false
  },
  division: {
    type: DataTypes.STRING(10),
    allowNull: false
  },
  fecha_nacimiento: {
    type: DataTypes.DATEONLY(20),
    allowNull: true
  },
  img_profile: {
    type: DataTypes.STRING(500),
    allowNull: true
  }
}, {
  tableName: 'perfil_alumno',
  timestamps: true
});