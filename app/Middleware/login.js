module.exports = function(req,res,next) {
    
    if(req.session.userlogin){
        if (req.session.userlogin.status === 'login') {
            next();    
        }
        else{
            res.redirect('/login')
        }
    }
    else{
        res.redirect('/login')
    }
};