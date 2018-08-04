module.exports = {


    // get_login(req,res){
    //     const db = req.app.get('db');

    //     db.login()
    // },

    add_client(req, res){
        const db = req.app.get('db');

        db.register([
            req.body.client_firstName,
            req.body.client_lastName,
            req.body.client_email,
            req.body.client_password,
            req.body.client_phone1,
        ])
            .then(([client]) => res.status(200).send(client))
            .catch(err => {
                console.warn('Error with the db', err)
                res.status(400).send(err);
            });

    },



    // get_clientInfo(req, res){
    //     const db = req.app.get('db');

    //     db.user_info();
    // },

    // edit_clientInfo(req, res){
    //     const db = req.app.get('db');

    //     db.edit_user();
    // },



    // get_appts(req, res){
    //     const db = req.app.get('db');

    //     db.appts();
    // },

    // edit_appt(req, res){
    //     const db = req.app.get('db');

    //     db.edit_appts();
    // },

    // delete_appt(req, res){
    //     const db = req.app.get('db');

    //     db.delete_appts();
    // },

    // add_appt(req, res){
    //     const db= req.app.get('db');

    //     db.add_appt();
    // }





}