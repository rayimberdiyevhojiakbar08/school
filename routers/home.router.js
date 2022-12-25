import { Router } from 'express';
import About from "../controllers/about.controller.js";
import Gallery from "../controllers/gallery.controller.js";
import Contact from "../controllers/contact.controller.js";
import Blog from "../controllers/blog.controller.js";
import Course from "../controllers/course.controller.js";
import News from "../controllers/popularnews.js";
import SingUp from '../controllers/singup.controller.js';
import SingIn from '../controllers/singin.controller.js';
import IsAuth from '../controllers/isasuth.controller.js';
import LogOut from '../controllers/logout.controller.js';
const router = new Router();

router.get("/", IsAuth.isAuth, About.aboutHome );
router.get("/gallery", IsAuth.isAuth, Gallery.galleryPage);
router.get("/contact", IsAuth.isAuth, Contact.contactPage);
router.get("/blogarchive", IsAuth.isAuth, Blog.archivePage);
router.get("/single", IsAuth.isAuth, Blog.signlePage);
router.get("/coursearchive", IsAuth.isAuth, Course.archivePage);
router.get("/detail", IsAuth.isAuth, Course.detailPage);

router.get("/professionalcourses", IsAuth.isAuth, Course.professionalcourses)
router.get("/beckend", IsAuth.isAuth, Course.backendt)
router.get("/Frontend", IsAuth.isAuth, Course.frontend)
router.get("/3DGrafick", IsAuth.isAuth, Course.grafic)
router.get("/DataStructures", IsAuth.isAuth, Course.datastr)
router.get("/cplus", IsAuth.isAuth, Course.cplus),
router.get("/csharm", IsAuth.isAuth, Course.csharm)

router.get("/expertteachers", IsAuth.isAuth, Course.expertteachers);
router.get("/algebrateachers", IsAuth.isAuth, Course.algebrateachers); //algebra kursni bosganda o'tishi uchun
router.get("/fizikateachers", IsAuth.isAuth, Course.fizikateachers);
router.get("/kimyoteachers", IsAuth.isAuth, Course.kimyateachers);
router.get("/giologiyateachers", IsAuth.isAuth, Course.giologiyateachers);
router.get("/geografiyateachers", IsAuth.isAuth, Course.geografiyateachers);
router.get("/tarixteachers", IsAuth.isAuth, Course.tarixteachers);


router.get("/working", IsAuth.isAuth, Course.workingPage);
router.get("/popularnews", News.popularNews);


router.get("/algebra", IsAuth.isAuth, Course.algebra); //algebra kursni bosganda o'tishi uchun
router.get("/fizika", IsAuth.isAuth, Course.fizika);
router.get("/kimyo", IsAuth.isAuth, Course.kimya);
router.get("/giologiya", IsAuth.isAuth, Course.giologiya);
router.get("/geografiya", IsAuth.isAuth, Course.geografiya);
router.get("/tarix", IsAuth.isAuth, Course.tarix);

router.get("/news1", IsAuth.isAuth, Blog.news1);
router.get("/news2", IsAuth.isAuth, Blog.news2);
router.get("/news3", IsAuth.isAuth, Blog.news3);
router.get("/news4", IsAuth.isAuth, Blog.news4);
router.get("/news5", IsAuth.isAuth, Blog.news5);
router.get("/news6", IsAuth.isAuth, Blog.news6);

router.get('/delete/:id', IsAuth.isAuth, Contact.deletePage);

// post metod 
// 
router.post('/contact', IsAuth.isAuth, Contact.Contact_);
// 

//popularnews
router.get("/news1", IsAuth.isAuth, News.news1);
router.get("/news2", IsAuth.isAuth, News.news2);
router.get("/news3", IsAuth.isAuth, News.news3);
router.get("/news4", IsAuth.isAuth, News.news4);
router.get("/news5", IsAuth.isAuth, News.news5);
router.get("/news6", IsAuth.isAuth, News.news6);

// SingIn va SingUp  
router.get('/singup', SingUp.singupPage);
router.get('/singin', SingIn.singinPage);
router.get('/logout', LogOut.Logout);
// 

// SingIn va SingUp  Post
// 
router.post('/singup', SingUp.Singup);
router.post('/singin', SingIn.Singin);
// 

export default router