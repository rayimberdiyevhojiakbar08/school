import fromblog from "../homedatabase/fromblog.js";
import ContactBase from '../models/concat.model.js';
class Blog{
    archivePage(req, res){
        res.render("main/blogarchive", { fromblog });
    }
    async signlePage(req, res) {
        const news = fromblog[0];
        const Contact = await ContactBase.find();
        res.render("main/signle", { fromblog, news, Contact});
    }
    news1(req, res){
        const news = fromblog[0]
        res.render("main/signle", { fromblog, news } )
    }
    news2(req, res){
        const news = fromblog[1]
        res.render("main/signle", { fromblog, news } )
    }
    news3(req, res){
        const news = fromblog[2]
        res.render("main/signle", { fromblog, news } )
    }
    news4(req, res){
        const news = fromblog[3]
        res.render("main/signle", { fromblog, news } )
    }
    news5(req, res){
        const news = fromblog[4]
        res.render("main/signle", { fromblog, news } )
    }
    news6(req, res){
        const news = fromblog[5]
        res.render("main/signle", { fromblog, news } )
    }
}

export default new Blog();
