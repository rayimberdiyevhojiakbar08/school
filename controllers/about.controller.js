
import fromblog from "../homedatabase/fromblog.js";
import data from "../homedatabase/service.js";
import slider from "../homedatabase/slider.js";
import teacherComtent from "../homedatabase/teacher.comtent.js";
import course from "../homedatabase/course.js";

class About{
    aboutHome(req, res){
        res.render("main/about", { data, slider, fromblog, teacherComtent, course })
    }
}
export default new About()


