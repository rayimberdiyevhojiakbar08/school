
import course from "../homedatabase/course.js";
import professionalCourses from "../homedatabase/professionalCourses.js";
import expertTeachers from "../homedatabase/expertTeachers.js"; 


class Course{
    archivePage(req, res){
<<<<<<< HEAD
        res.render("main/coursearchive", { course, fan })
=======
        res.render("main/coursearchive", { course })
>>>>>>> 72e013bd218e22b936fad115a1f3186be1ba9a71
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

    professionalcourses(req, res){
        let course = professionalCourses
        res.render("main/coursearchive",{ course })
    }
    backendt(req, res){
        let fan = professionalCourses[0]
        let course = professionalCourses
        res.render("main/detail", { fan, course } )
    }
    frontend(req, res){
        let fan = professionalCourses[1]
        let course = professionalCourses
        res.render('main/detail', { fan, course })
    }
    grafic(req, res){
        let fan = professionalCourses[2]
        let course = professionalCourses
        res.render('main/detail', { fan, course })
    }
    datastr(req, res){
        let fan = professionalCourses[3]
        let course = professionalCourses
        res.render('main/detail', { fan, course })
    }
    cplus(req, res){
        let fan = professionalCourses[4]
        let course = professionalCourses
        res.render('main/detail', { fan, course })
    }
    csharm(req, res){
        let fan = professionalCourses[5]
        let course = professionalCourses
        res.render('main/detail', { fan, course })
    }
    expertteachers(req, res){
        let course = expertTeachers;
        res.render("main/coursearchive", { course })
    }
    algebrateachers(req, res){
        let fan = expertTeachers[0]
        let course = expertTeachers
        res.render("main/detail", { fan, course } )
    }
    fizikateachers(req, res){
        let fan = expertTeachers[1]
        let course = expertTeachers
        res.render('main/detail', { fan, course })
    }
    kimyateachers(req, res){
        let fan = expertTeachers[2]
        let course = expertTeachers
        res.render('main/detail', { fan, course })
    }
    giologiyateachers(req, res){
        let fan = expertTeachers[3]
        let course = expertTeachers
        res.render('main/detail', { fan, course })
    }
    geografiyateachers(req, res){
        let fan = expertTeachers[4]
        let course = expertTeachers
        res.render('main/detail', { fan, course })
    }
    tarixteachers(req, res){
        let fan = expertTeachers[5]
        let course = expertTeachers
        res.render('main/detail', { fan, course })
    }

}   


export default new Course();

