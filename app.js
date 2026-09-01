import express from "express";

import { testDB } from "./src/config/database.js";

const app = express();

app.use(express.json());

app.listen(3000, async () => {
  await testDB();
  console.log("Servidor Corriendo en el puesto 3000");
});
