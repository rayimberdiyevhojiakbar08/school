import About from "../controllers/about.controller.js";
import { Router } from "express";

const router = Router();

router.get("/about", About.aboutHome)

export default router


