import ContactBase from '../models/concat.model.js';
class Contact{
     contactPage(req, res) {
        res.render("main/contact")
    }
    async Contact_(req, res) {
        await ContactBase.create(req.body);
        res.redirect('/single');
    }
}

export default new Contact();

