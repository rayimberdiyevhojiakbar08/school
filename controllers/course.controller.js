class Course{
    archivePage(req, res){
        res.render("main/coursearchive")
    }
    detailPage(req, res){
        res.render("main/detail")
    }
}


export default new Course();

