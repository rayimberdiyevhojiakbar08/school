import popularnews from "../homedatabase/popularnews.js";
import top3 from "../homedatabase/top3news.js";
class News {
    popularNews(req, res) {
        const news = popularnews[0];
        res.render('main/popularnews', {popularnews, news, top3});
    }
    news1(req, res){
        const news = popularnews[0]
        res.render("main/popularnews", { popularnews, news } )
    }
    news2(req, res){
        const news = popularnews[1]
        res.render("main/popularnews", { popularnews, news } )
    }
    news3(req, res){
        const news = popularnews[2]
        res.render("main/popularnews", { popularnews, news } )
    }
    news4(req, res){
        const news = popularnews[3]
        res.render("main/popularnews", { popularnews, news } )
    }
    news5(req, res){
        const news = popularnews[4]
        res.render("main/popularnews", { popularnews, news } )
    }
    news6(req, res){
        const news = popularnews[5]
        res.render("main/popularnews", { popularnews, news } )
    }
}

export default new News()