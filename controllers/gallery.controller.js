import Imgs from '../models/gallery.model.js';
class Gallery{
    galleryPage(req, res){
        
        res.render("main/gallery", {Imgs});
    }
}

export default new Gallery();