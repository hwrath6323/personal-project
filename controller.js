module.exports = {


    // get_login(req, res){
    //     const db = req.app.get('db');
    //     db.login.findOne({id:req.params.id})
    //         .then(client => res.status(200).send(client))
    //         .catch(err => {
    //                 console.log(err);
    //                 res.status(400).send(err);
    //         });
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



    get_userInfo(req, res){
        const db = req.app.get('db');

        db.user_info([
            req.params.id])
                .then(user => res.status(200).send(user))
                .catch(err => {
                        console.log(err);
                        res.status(400).send(err);
                });
    },

    edit_user(req,res){
        const db = req.app.get('db');

        db.edit_user({
            id: req.body.client_id,
            client_firstName: req.body.client_firstName,
            client_lastName: req.body.client_lastName,
            client_email: req.body.client_email,
            client_password: req.body.client_password,
            client_phone1: req.body.client_phone1,
        })
            .then(([user]) => {res.status(200).user})
            .catch(err => {
                console.warn('could not update', err)
                res.status(400).send(err)
            })

    },



    // get_appts(req, res){
    //     const db = req.app.get('db');
        
    //     db.get_appts()
    //         .then(appts => res.status(200).send(appts))
    //         .catch(err => {
    //                 console.log(err);
    //                 res.status(400).send(err);
    //         });
    // },

    // edit_appt(req,res){
    //     const db = req.app.get('db');

    //     db.edit_appt({
    //         id: req.body.product_id,
    //         url: req.body.product_url,
    //         name: req.body.product_name,
    //         price: req.body.product_price
    //     })
    //         .then(([appt]) => {res.status(200).appt})
    //         .catch(err => {
    //             console.warn('could not update', err)
    //             res.status(400).send(err)
    //         })

    // },

    // delete_appt(req, res){
    //     const db = req.app.get('db');

    //     db.delete_appt([
    //         req.params.id])
    //             .then(() => {
    //                 res.send('deleted')
    //             })
    //             .catch(err => {
    //                 console.warn('could not be deleted', err);
    //             });
    // },

    // add_appt(req, res){
    //     const db = req.app.get('db');

    //     db.add_appt({
    //         url: req.body.product_url,
    //         name: req.body.product_name,
    //         price: req.body.product_price
    //     })
    //         .then(([ appt ]) => res.status(200).send(appt))
    //         .catch(err => {
    //             console.warn('error with the db', err)
    //             res.status(400).send(err);
    //         });
        
    // }






}