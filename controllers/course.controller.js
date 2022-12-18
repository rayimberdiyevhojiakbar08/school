class Course{
    archivePage(req, res){
        res.render("main/coursearchive")
    }
    detailPage(req, res){
        res.render("main/detail")
    }
    CoursesPage(req, res){
    res.render("main/courses")
    }
}


export default new Course();

