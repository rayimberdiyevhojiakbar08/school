import {Router} from 'express';
import MainhomeRouter from '../controllers/home.controller.js';
import About from "../controllers/about.controller.js";

const router = new Router();

router.get('/', MainhomeRouter.home);
router.get("/about", About.aboutHome );

export default router