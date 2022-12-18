class Course{
    archivePage(req, res){
        res.render("main/coursearchive")
    }
    detailPage(req, res){
        res.render("main/detail")
    }
    workingPage(req, res){
    res.render("main/working")
    }
}


export default new Course();

