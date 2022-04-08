const mongoose = require('mongoose')
const dates = Date.now();

const link = new mongoose.Schema({
    linkid: { 
        type: String,
        require:true 
    },
    link: { 
        type: String, 
        require:true 
    }
},
{ timestamps: true });

module.exports = mongoose.model('link', link)