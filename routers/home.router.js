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

router.get("/professionalcourses", IsAuth.isAuth, About.proFessionalCourses)
router.get("/expertteachers", IsAuth.isAuth, About.expertteachers); //algebra kursni bosganda o'tishi uchun
router.get("/onlinelearning",IsAuth.isAuth, About.onlineLearning);
router.get("/audioLessons",IsAuth.isAuth, About.audioLessons);
router.get("/scientificfilms",IsAuth.isAuth, About.scientificfilms)
router.get("/detail:_id",Course.ourFeatures)

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
router.get("/popularnews", News.popularNews);
router.get("/news01", IsAuth.isAuth, News.news1);
router.get("/news02", IsAuth.isAuth, News.news2);
router.get("/news03", IsAuth.isAuth, News.news3);
router.get("/news04", IsAuth.isAuth, News.news4);
router.get("/news05", IsAuth.isAuth, News.news5);
router.get("/news06", IsAuth.isAuth, News.news6);


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