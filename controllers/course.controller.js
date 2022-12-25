import course from '../homedatabase/course.js';
class Course{
    archivePage(req, res){
        res.render("main/coursearchive", { course, fan })
    }
    detailPage(req, res){
        let fan = course[0]
        res.render("main/detail", { course} )
    }
    workingPage(req, res){
    res.render("main/working")
    }
    algebra(req, res){
        let fan = course[0]
        res.render("main/detail", { course, fan } )
    }
    fizika(req, res){
        let fan = course[1]
        res.render('main/detail', { course })
    }
    kimya(req, res){
        let fan = course[2]
        res.render('main/detail', { course })
    }
    giologiya(req, res){
        let fan = course[3]
        res.render('main/detail', { course })
    }
    geografiya(req, res){
        let fan = course[4]
        res.render('main/detail', { course })
    }
    tarix(req, res){
        let fan = course[5]
        res.render('main/detail', { course })
    }
}


export default new Course();

