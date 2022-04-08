const multer  = require('multer')
var path = require('path');

const storage = multer.diskStorage({
    destination: 'public/images/',
    filename: function(req,file,cd){
        cd(null,file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
})
 
const upload = multer({
    storage: storage,
})

module.exports = upload;
