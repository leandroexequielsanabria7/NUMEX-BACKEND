import { Router } from "express";
import {
  createMultimedia,
  deleteMultimedia,
  getAllMultimedias,
  getMultimediaById,
  updateMultimedia,
} from "../controllers/multimedia.controller.js";

const routerMultimedia = Router();

routerMultimedia.post("/multimedia", createMultimedia);
routerMultimedia.get("/multimedia", getAllMultimedias);
routerMultimedia.get("/multimedia", getMultimediaById);
routerMultimedia.put("/multimedia", updateMultimedia);
routerMultimedia.delete("/multimedia", deleteMultimedia);
