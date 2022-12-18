import {Router} from 'express';
import MainhomeRouter from '../controllers/home.controller.js';
import About from "../controllers/about.controller.js";
import Gallery from "../controllers/gallery.controller.js";
import Contact from "../controllers/contact.controller.js";
import Blog from "../controllers/blog.controller.js";
const router = new Router();

//router.get('/', MainhomeRouter.home);
router.get("/", About.aboutHome );
router.get("/gallery", Gallery.galleryPage);
router.get("/contact", Contact.contactPage);
router.get("/archive", Blog.archivePage);
router.get("/single", Blog.signlePage);

export default router