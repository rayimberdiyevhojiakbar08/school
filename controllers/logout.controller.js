class Logout {
    Logout(req, res) {
        delete req.session.user;
        res.redirect('/singin');
    }
}

export default new Logout();