import { createEnunciado, getAllEnunciadByPK, getAllEnunciados } from "../controllers/enunciados.controller.js"
import { Router } from "express"

export const routerEnunciados = Router()

routerEnunciados.get('/api/enunciados',getAllEnunciados)
routerEnunciados.get('/api/enunciados/:id',getAllEnunciadByPK)
routerEnunciados.post('/api/enunciados',createEnunciado)

