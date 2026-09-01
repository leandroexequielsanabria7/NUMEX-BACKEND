import { sequelize } from "../config/database";
import { DataTypes } from "sequelize";

export const Opciones = sequelize.define('Opciones',
    {
        id_enunciado:{
            type:DataTypes.INTEGER,
            allowNull:false
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
    }
)