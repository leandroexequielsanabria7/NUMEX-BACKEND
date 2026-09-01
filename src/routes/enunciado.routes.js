import { createEnunciado, getAllEnunciadByPK, getAllEnunciados } from "../controllers/enunciados.controller.js"
import { Router } from "express"
import { enunciadosValidations } from "../middlewares/validations/enunciados.validations.js"
import { validate } from "../middlewares/validate.js"

export const routerEnunciados = Router()

routerEnunciados.get('/api/enunciados',getAllEnunciados)
routerEnunciados.get('/api/enunciados/:id',getAllEnunciadByPK)
routerEnunciados.post('/api/enunciados',enunciadosValidations,validate,createEnunciado)

