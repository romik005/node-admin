const linkmod = require('../Models/link.js');

function redeemcontroller(){ 
    return {
        async linktrackerconindex(req,res){
            const redeemdata = await linkmod.find().then();
            var fullUrl = req.protocol + '://' + req.get('host');
            res.render('linktrackerconindex',{redeemdata,fullUrl});
        },
        async linktrackeradd(req,res){

            const {link,package} = req.body;

            if (link && package) {
                await linkmod({
                    linkid:package,
                    link:link
                }).save();
            }

            res.redirect('/admin/linktracker');
        },
        async deletelink(req,res){
            await linkmod.deleteMany({linkid:req.params.id}).then();
            res.redirect('/admin/linktracker');
        },
        async updatelink(req,res){
            const {linkid,id,link} = req.body;
            if (linkid && id && link) {
                await linkmod.updateOne({_id:id},{$set: {"linkid": linkid,"link": link}}).then();
            }
            res.redirect('/admin/linktracker');
        }
    }
}
module.exports = redeemcontroller 