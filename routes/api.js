function api(app) {

    app.get('/api', (req, res) => {
        res.send('server');
    })

    app.get('/pack/:id', async (req, res) => {

        const { id } = req.params

        if (id) {
            const findlink = await linkmod.findOne({ linkid: id });
            if (findlink !== null) {
                const apirespo = await axios.get('https://ipapi.co/49.36.87.74/json/')
                linklogmod({
                    linkid:findlink.linkid,
                    ip:apirespo.data.ip,
                    version:apirespo.data.version,
                    country:apirespo.data.country_name,
                    region:apirespo.data.region,
                    city:apirespo.data.city,
                    network:apirespo.data.org
                }).save();
                res.redirect(findlink.link)
            }
            else{
                res.send(404);
            }
        }
        else{
            res.send(404);
        }
    })

}
module.exports = api    