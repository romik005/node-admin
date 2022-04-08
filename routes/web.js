const linktrackercon = require('../app/Controllers/linktracker.js');

const loginmedi = require('../app/Middleware/login.js');
const melter = require('../app/Helpers/multer.js')

function initroutes(app){

    app.get('/',(req,res)=>{
        res.send('lisk');
    })

    app.get('/admin/linktracker',loginmedi,linktrackercon().linktrackerconindex)
    app.post('/admin/linktracker',loginmedi,linktrackercon().linktrackeradd)
    app.post('/admin/updatelink',loginmedi,linktrackercon().updatelink)
    app.get('/admin/linktrackerdelete/:id',loginmedi,linktrackercon().deletelink)

}
module.exports = initroutes
