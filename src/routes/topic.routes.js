import { Router } from "express";
import {
  deleteTopic,
  getAllTopics,
  getTopicById,
  topicCreate,
  updateTopic,
} from "../controllers/topic.controller.js";
import { createTopicValidation } from "../middlewares/validations/topic.validations.js";
import { validate } from "../middlewares/validate.middleware.js";

export const topicRouter = Router();

topicRouter.post("/topics", createTopicValidation, validate, topicCreate);
topicRouter.get("/topics", getAllTopics);
topicRouter.get("/topics/:id", getTopicById);
topicRouter.put("/topics/:id", updateTopic);
topicRouter.delete("/topics/:id", deleteTopic);
