import {Router} from 'express';
import MainhomeRouter from '../controllers/home.controller.js';
const router = new Router();

router.get('/', MainhomeRouter.home);

export default router