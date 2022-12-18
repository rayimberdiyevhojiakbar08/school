class Blog{
    archivePage(req, res){
        res.render("main/archive");
    }
    signlePage(req, res){
        res.render("main/signle");
    }
}

export default new Blog();
