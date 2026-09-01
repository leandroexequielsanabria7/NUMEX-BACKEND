import express from 'express'
import { routerEnunciados } from './src/routes/enunciado.routes.js'
import { testDB } from './src/config/database.js'
import { routerOptions } from './src/routes/opciones.routes.js'
const app = express()

app.use(express.json())


app.listen(3000, async () =>{
    await testDB()
    console.log('Servidor Corriendo en el puesto 3000')
    })
