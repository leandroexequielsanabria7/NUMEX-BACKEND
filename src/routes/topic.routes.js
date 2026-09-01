import { Router } from "express";
import {
  deleteTopic,
  getAllTopics,
  getTopicById,
  topicCreate,
  updateTopic,
} from "../controllers/topic.controller.js";

export const topicRouter = Router();

topicRouter.post("/topics", topicCreate);
topicRouter.get("/topics", getAllTopics);
topicRouter.get("/topics/:id", getTopicById);
topicRouter.put("/topics/:id", updateTopic);
topicRouter.delete("/topics/:id", deleteTopic);
