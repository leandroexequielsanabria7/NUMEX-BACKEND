import { body } from "express-validator";

export const createTopicValidation = [
  body("titleTopic")
    .notEmpty()
    .withMessage("El título del tema no debe ser vacío."),
  body("descripGeneral")
    .notEmpty()
    .withMessage("La descripción del tema no debe ser vacía."),
];
