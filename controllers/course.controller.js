
import course from "../homedatabase/course.js";
import professionalCourses from "../homedatabase/professionalCourses.js";
import expertTeachers from "../homedatabase/expertTeachers.js"; 
import onlinelearning from "../homedatabase/onlineLearning.js";
import audiolessons from "../homedatabase/audiolessons.js";
import scientificfilms from "../homedatabase/scientificfilms.js";

class Course{
    archivePage(req, res){
        res.render("main/coursearchive", { course, title:"Kurslar" })

    }
    detailPage(req, res){
        let fan = course[0]
        res.render("main/detail", { course, fan } )
    }

    //Start features section
    ourFeatures(req, res){
        const id = req.params._id;
        if(professionalCourses.find(item => item._id === id)){
            const fan = professionalCourses.find(item => item._id === id)
            const course = professionalCourses
            res.render("main/detail", { fan, course, })
        }else if(expertTeachers.find(item => item._id === id)){
            const fan = expertTeachers.find(item => item._id === id)
            const course = expertTeachers
            res.render("main/detail", { fan, course, })
        }else if(onlinelearning.find(item => item._id === id)){
            const fan = onlinelearning.find(item => item._id === id);
            const course = onlinelearning
            res.render("main/detail", { fan, course } )
        }else if(audiolessons.find(item => item._id === id)){
            const fan = audiolessons.find(item => item._id === id)
            let course = audiolessons;
            res.render("main/detail", { fan, course } )
        }else if (scientificfilms.find(item => item === id)){
            const fan = scientificfilms.find(item => item === id)
            const course = scientificfilms;
            res.render("main/detail", { fan, course })
        }
        
    }


}   


export default new Course();

