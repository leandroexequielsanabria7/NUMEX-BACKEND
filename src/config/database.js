import { Sequelize } from "sequelize";
import 'dotenv/config'

export const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, '', {
  host: process.env.DB_HOST,
  dialect: 'mysql'
})

export const testDB = async () =>{
    try {
        await sequelize.authenticate();
        await sequelize.sync(/* {force:true} */)
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}