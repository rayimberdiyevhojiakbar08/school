
import fromblog from "../homedatabase/fromblog.js";
import data from "../homedatabase/service.js";
import slider from "../homedatabase/slider.js";
import teacherComtent from "../homedatabase/teacher.comtent.js";
import course from "../homedatabase/course.js";
import counter from "../homedatabase/counter.js";
import testimonial from "../homedatabase/testimonial.js";
import features from "../homedatabase/features.js";

class About{
    aboutHome(req, res){
        const newfromblog = [fromblog[0], fromblog[1], fromblog[2]]
        res.render("main/about", {features, data, slider, newfromblog, teacherComtent, course, counter, testimonial })
    }
}
export default new About()


