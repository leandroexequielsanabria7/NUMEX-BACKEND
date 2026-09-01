import { createOption,getAllOptions,getAllOptionByPK } from "../controllers/opciones.controller.js"
import { Router } from "express"

export const routerOptions = Router()

routerOptions.get('/api/opciones',getAllOptions)
routerOptions.get('/api/opciones/:id',getAllOptionByPK)
routerOptions.post('/api/opciones',createOption)