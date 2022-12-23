
import fromblog from "../homedatabase/fromblog.js";
import data from "../homedatabase/service.js";
import slider from "../homedatabase/slider.js";
import teacherComtent from "../homedatabase/teacher.comtent.js";

class About{
    aboutHome(req, res){
        res.render("main/about", { data, slider, fromblog, teacherComtent })
    }
}
export default new About()


