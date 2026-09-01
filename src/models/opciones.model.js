import { sequelize } from "../config/database.js";
import { DataTypes } from "sequelize";
import { Enunciados } from "./enunciados.model.js";

export const Opciones = sequelize.define('Opciones',
    {
        id_enunciado:{
            type:DataTypes.INTEGER,
            allowNull:false,
            references:{
                model:Enunciados,
                key:'id'
            }
        },
        opcion:{
            type:DataTypes.STRING,
            allowNull:false
        },
        isCorrect:{
            type:DataTypes.BOOLEAN,
            allowNull:false,
            defaultValue:false
        }
    },
    {
        timestamps:false
    }
)

Opciones.belongsTo(Enunciados,{foreignKey:'id_enunciado',as:'enunciado'})
Enunciados.hasMany(Opciones,{foreignKey:'id_enunciado', as: 'opciones'})