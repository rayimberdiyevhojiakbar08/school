class Blog{
    archivePage(req, res){
        res.render("main/blogarchive");
    }
    signlePage(req, res){
        res.render("main/signle");
    }
}

export default new Blog();
