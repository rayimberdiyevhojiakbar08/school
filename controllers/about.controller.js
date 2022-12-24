import data from "../homedatabase/home.js"
import data from "../homedatabase/ourfeatuteres.js"
class About{
    aboutHome(req, res){
        res.render("main/about", { data } )
    }
}
export default new About


