import { sequelize } from "../config/database.js";
import { DataTypes } from "sequelize";

export const Enunciados = sequelize.define('Enunciados',
    {
        id_tema:{
            type:DataTypes.INTEGER,
            allowNull:false
        },
        enunciado:{
            type:DataTypes.STRING,
            allowNull:false
        }
    },
    {
        timestamps:false
    }
)