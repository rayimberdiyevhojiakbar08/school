import data from "../homedatabase/home.js"

class About{
    aboutHome(req, res){
        res.render("main/about", { data } )
    }
}
export default new About


