import express from 'express'
import { testDB } from './src/config/database.js'
import './src/models/User.js'
import './src/models/PerfilAlumno.js'
import './src/models/PerfilDocente.js'
const app = express()

app.use(express.json())

app.listen(3000, async () =>{
    await testDB()
    console.log('Servidor Corriendo en el puesto 3000')
    })
