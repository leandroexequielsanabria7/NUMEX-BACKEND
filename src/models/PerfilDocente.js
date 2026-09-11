import { DataTypes } from 'sequelize';
import { sequelize } from '../config/database.js';

export const PerfilDocente = sequelize.define('PerfilDocente', {
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
    unique: false
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
  tableName: 'perfil_docente',
  timestamps: true
});