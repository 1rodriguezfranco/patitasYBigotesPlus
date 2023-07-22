function adminLogged(req, res, next){
    if(req.session.userLogged.admin === 0){
        return res.redirect("/auth/profile")
    }
    next()
};

module.exports = adminLogged;