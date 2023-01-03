import ContactBase from '../models/concat.model.js';
import { extname, dirname, resolve } from "path";
import { fileURLToPath } from "url";
import { unlinkSync, renameSync } from "fs";
class Contact{
     contactPage(req, res) {
        res.render("main/contact")
    }
    async Contact_(req, res) {
        const ext = extname(req.file.originalname).toLowerCase();

        if (!(ext === ".png" || ext === ".jpg")) {
            unlinkSync(resolve(dirname(fileURLToPath(import.meta.url)), "../public/images/" + req.file.filename));
            return res.redirect("/");
        }

        req.body.img = req.file.filename + ext;

        renameSync(resolve(dirname(fileURLToPath(import.meta.url)), "../public/images/" + req.file.filename),
                   resolve(dirname(fileURLToPath(import.meta.url)), "../public/images/" + req.file.filename + ext)
        );
        console.log(req.body.img)
        await ContactBase.create(req.body);
        res.redirect('/single');
    }
    async deletePage(req, res) {
        await ContactBase.findByIdAndDelete(req.params.id);
        res.redirect('/single');
    }
}

export default new Contact();

