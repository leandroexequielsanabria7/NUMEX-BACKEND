import { body, param } from "express-validator";

export const enunciadosValidations = [
    body("id_tema")
        .notEmpty()
        .withMessage('El ID del tema es obligatorio'),
    body("enunciado")
        .notEmpty()
        .withMessage('No puede haber un enunciado vacio')
]