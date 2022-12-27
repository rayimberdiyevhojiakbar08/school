class Isauth {
    isAuth(req, res, next) {
        if (!req.session.user) {
            res.redirect('/singin');
        } else {
            next();
        }
    }
    Logout(req, res) {
        delete req.session.user;
        res.redirect('/singin');
    }
}

export default new Isauth();