import RegisterBase from '../models/register.model.js';
import { hash } from 'bcrypt';
import { extname, dirname, resolve } from "path";
import { fileURLToPath } from "url";
import { unlinkSync, renameSync } from "fs";



 class Singup {
   singupPage(req, res) {
        res.render('main/singup');
    }
    async Singup(req, res) {
        const Exitemails = await RegisterBase.findOne({email:req.body.email});
        if (Exitemails) {
            res.redirect('/singup');
        } else {
            req.body.password = await hash(req.body.password, 10);
            await RegisterBase.create(req.body);
            res.redirect('/singin');
        }
    }
 }

 export default new Singup();
