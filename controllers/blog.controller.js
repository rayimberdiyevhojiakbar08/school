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
    async news2(req, res) {
        const news = fromblog[1]
        const Contact = await ContactBase.find();
        res.render("main/signle", { fromblog, news, Contact});
    }
    async news3(req, res) {
        const news = fromblog[2]
        const Contact = await ContactBase.find();
        res.render("main/signle", { fromblog, news, Contact});
    }
    async news4(req, res) {
        const news = fromblog[3]
        const Contact = await ContactBase.find();
        res.render("main/signle", { fromblog, news, Contact});
    }
    async news5(req, res) {
        const news = fromblog[4]
        res.render("main/signle", { fromblog, news } )
    }
    async news6(req, res) {
        const news = fromblog[5]
        const Contact = await ContactBase.find();
        res.render("main/signle", { fromblog, news, Contact});
    }
}

export default new Blog();
