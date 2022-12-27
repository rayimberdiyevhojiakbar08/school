import RegisterBase from '../models/register.model.js';
import path from 'path';
import { compare } from 'bcrypt';

class Singin {
    singinPage(req, res) {
        res.render('main/singin');
    }
    async Singin(req, res) {
        const {email, password} = req.body;
        const user = await RegisterBase.findOne({email});

        if (user) {
            const passed = await compare(password, user.password);
            if (passed) {
                req.session.user = user;
                res.redirect('/');
            } else {
                return res.redirect('/singin');
            }
        } else {
            return res.redirect('/singin');
        }
        console.log(path.resolve());
    }
}
 
export default new Singin();