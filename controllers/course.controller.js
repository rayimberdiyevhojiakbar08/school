
import course from "../homedatabase/course.js";
import professionalCourses from "../homedatabase/professionalCourses.js";
import expertTeachers from "../homedatabase/expertTeachers.js"; 


class Course{
    archivePage(req, res){
        res.render("main/coursearchive", { course })
    }
    detailPage(req, res){
        let fan = course[0]
        res.render("main/detail", { course, fan  } )
    }
    workingPage(req, res){
    res.render("main/working")
    }
    algebra(req, res){
        let fan = course[0]
        res.render("main/detail", { fan, course } )
    }
    fizika(req, res){
        let fan = course[1]
        res.render('main/detail', { fan, course })
    }
    kimya(req, res){
        let fan = course[2]
        res.render('main/detail', { fan, course })
    }
    giologiya(req, res){
        let fan = course[3]
        res.render('main/detail', { fan, course })
    }
    geografiya(req, res){
        let fan = course[4]
        res.render('main/detail', { fan, course })
    }
    tarix(req, res){
        let fan = course[5]
        res.render('main/detail', { fan, course })
    }

    professionalcourses(req, res){
        let course = professionalCourses
        res.render("main/coursearchive",{ course })
    }
    expertteachers(req, res){
        let course = expertTeachers;
        res.render("main/coursearchive", { course })
    }


}   


export default new Course();

