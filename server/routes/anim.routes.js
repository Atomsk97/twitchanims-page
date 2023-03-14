import { Router } from "express";

import { getAnims, getAnim } from "../controllers/anims.controllers.js";

const router = Router();

router.get("/anims", getAnims);

router.get("/anims/:id", getAnim);

export default router;
