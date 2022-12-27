import { Router } from 'express';
import About from "../controllers/about.controller.js";
import Gallery from "../controllers/gallery.controller.js";
import Contact from "../controllers/contact.controller.js";
import Blog from "../controllers/blog.controller.js";
import Course from "../controllers/course.controller.js";
import News from "../controllers/popularnews.js";
const router = new Router();

router.get("/", About.aboutHome );
router.get("/gallery", Gallery.galleryPage);
router.get("/contact", Contact.contactPage);
router.get("/blogarchive", Blog.archivePage);
router.get("/single", Blog.signlePage);
router.get("/coursearchive", Course.archivePage);
router.get("/detail", Course.detailPage);

router.get("/professionalcourses", Course.professionalcourses)
router.get("/expertteachers", Course.expertteachers);

router.get("/working", Course.workingPage);
router.get("/popularnews", News.popularNews);


router.get("/algebra", Course.algebra); //algebra kursni bosganda o'tishi uchun
router.get("/fizika", Course.fizika);
router.get("/kimyo", Course.kimya);
router.get("/giologiya", Course.giologiya);
router.get("/geografiya", Course.geografiya);
router.get("/tarix", Course.tarix);

router.get("/news1", Blog.news1);
router.get("/news2", Blog.news2);
router.get("/news3", Blog.news3);
router.get("/news4", Blog.news4);
router.get("/news5", Blog.news5);
router.get("/news6", Blog.news6);

// post metod 
// 
router.post('/contact', Contact.Contact_);
// 

//popularnews
router.get("/popularnews1", News.news1);
router.get("/popularnews2", News.news2);
router.get("/popularnews3", News.news3);
router.get("/popularnews4", News.news4);
router.get("/popularnews5", News.news5);
router.get("/popularnews6", News.news6);




export default router