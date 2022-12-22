import data from "../homedatabase/service.js"
import slider from "../homedatabase/slider.js";

class About{
    aboutHome(req, res){
        res.render("main/about", { data, slider })
    }
}
export default new About()


