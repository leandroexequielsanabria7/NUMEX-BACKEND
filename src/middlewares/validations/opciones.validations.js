import { body, param } from "express-validator";

export const opcionesValidations = [
    body("id_enunciado")
        .notEmpty()
        .withMessage('El ID del enunciado es obligatorio'),
    body("opcion")
        .notEmpty()
        .withMessage('No puede haber una opcion vacia'),
    body("isCorrect")
        .notEmpty()
        .withMessage('el campo "is Correct" es obligatorio'),
    
]