import express from "express";
import cors from "cors";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

import animRoutes from "./routes/anim.routes.js";

const app = express();
const __dirname = dirname(fileURLToPath(import.meta.url));

//Middlewares
app.use(cors());
app.use(express.json());

//Routes
app.use(animRoutes);

app.use(express.static(join(__dirname, "../client/dist")));

app.get('*', (req, res) => {
  res.sendFile(join(__dirname, "../client/dist/index.html"))
})

export default app;
