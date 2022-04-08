function controller(){
    return{
        login(req,res){
            res.render('login')
        },
        loginpost(req,res){
            if (req.body.username == process.env.USERID && req.body.password == process.env.USERPASS) {
                req.session.userlogin = {username:process.env.USERID,status:'login'}
                res.redirect('/admin/linktracker');
            }
            else{
                req.session.userlogin = {status:'notlogin'}
                res.redirect('/login');
            }
        },
        logoutget(req,res){
            req.session.userlogin = {status:'notlogin'}
            res.redirect('/login');
        }
    }
}
module.exports = controller