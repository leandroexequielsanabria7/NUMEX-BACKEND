import { validationResult } from "express-validator";

export const validate = (req, res, next) => {
  const results = validationResult(req);
  if (!results.isEmpty()) {
    const custom = results.formatWith((err) => {
      return `${err.path}: ${err.msg}`;
    });

    return res.status(400).json(custom.array());
  }
  next();
};
