
import fromblog from "../homedatabase/fromblog.js";
import data from "../homedatabase/service.js";
import slider from "../homedatabase/slider.js";
import teacherComtent from "../homedatabase/teacher.comtent.js";
import course from "../homedatabase/course.js";
import counter from "../homedatabase/counter.js";
import testimonial from "../homedatabase/testimonial.js";
import features from "../homedatabase/features.js";
import professionalCourses from "../homedatabase/professionalCourses.js"
import expertTeachers from "../homedatabase/expertTeachers.js"
import onlinelearning from "../homedatabase/onlineLearning.js" 
import audiolessons from "../homedatabase/audiolessons.js";
import scientificfilms from "../homedatabase/scientificfilms.js";

class About{
    aboutHome(req, res){
        const newfromblog = [fromblog[0], fromblog[1], fromblog[2]]
        res.render("main/about", {features, data, slider, newfromblog, teacherComtent, course, counter, testimonial })
    }

    proFessionalCourses(req, res){
        let course = professionalCourses;
        res.render("main/coursearchive", { course, title: "proFessional kurslar" })
    }
    expertteachers(req, res){
        let course = expertTeachers;
        res.render("main/coursearchive", { course, title: "Malakali o'qtuvchilar" })
    }
    onlineLearning(req, res){
        let course = onlinelearning;
        res.render("main/coursearchive", { course, title: "Online talimlar" })
    }
    audioLessons(req, res){
        let course = audiolessons;
        res.render("main/coursearchive", { course, title: "Audio darslar" }) 
    }
    scientificfilms(req, res){
        let course = scientificfilms;
        res.render("main/scientificfilms", { course, title: "Ilmiy filmlar" }) 
    }
}
export default new About()


