import { createOption,getAllOptions,getAllOptionByPK } from "../controllers/opciones.controller.js"
import { Router } from "express"
import { validate } from "../middlewares/validate.js"
import { opcionesValidations } from "../middlewares/validations/opciones.validations.js"

export const routerOptions = Router()

routerOptions.get('/api/opciones',getAllOptions)
routerOptions.get('/api/opciones/:id',getAllOptionByPK)
routerOptions.post('/api/opciones',opcionesValidations,validate,createOption)