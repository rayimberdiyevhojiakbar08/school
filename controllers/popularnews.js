import popularnews from "../homedatabase/popularnews.js";
class News {
    popularNews(req, res) {
        const news = popularnews[0];
        res.render('main/popularnews', {popularnews, news});
    }
    news1(req, res){
        const news = popularnews[0]
        res.render("main/signle", { popularnews, news } )
    }
    news2(req, res){
        const news = popularnews[1]
        res.render("main/signle", { popularnews, news } )
    }
    news3(req, res){
        const news = popularnews[2]
        res.render("main/signle", { popularnews, news } )
    }
    news4(req, res){
        const news = popularnews[3]
        res.render("main/signle", { popularnews, news } )
    }
    news5(req, res){
        const news = popularnews[4]
        res.render("main/signle", { popularnews, news } )
    }
    news6(req, res){
        const news = popularnews[5]
        res.render("main/signle", { popularnews, news } )
    }
}

export default new News()