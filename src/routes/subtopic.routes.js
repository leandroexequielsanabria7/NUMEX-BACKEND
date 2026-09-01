import { Router } from "express";
import {
  deleteSubtopic,
  getAllSubtopics,
  getSubtopicById,
  subtopicCreate,
  updateSubtopic,
} from "../controllers/subtopic.controller.js";

export const subtopicRouter = Router();

subtopicRouter.post("/subtopics", subtopicCreate);
subtopicRouter.get("/subtopics", getAllSubtopics);
subtopicRouter.get("/subtopics/:id", getSubtopicById);
subtopicRouter.put("/subtopics/:id", updateSubtopic);
subtopicRouter.delete("/subtopics/:id", deleteSubtopic);
