const logincon = require('../app/Controllers/login.js');

function singelpage(app){
    app.get('/login',logincon().login)
    app.post('/adminlogin',logincon().loginpost)
    app.get('/admin/logout',logincon().logoutget)
}

module.exports = singelpage