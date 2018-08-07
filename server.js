const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();
const massive = require('massive');

const app = express();

massive(process.env.CONNECTION_STRING)
    .then((dbInstance)=>{
        app.set('db', dbInstance)
        console.log('connect to db')
    })

app.use(cors());
app.use(bodyParser.json());

const port = process.env.PORT || 3050;

// app.get('/api/client_info', controller.get_login)
app.post('/api/client_info', controller.add_client)

app.get('/api/client_info/:id', controller.get_userInfo)
app.put('/api/client_info/:id', controller.edit_user)

// app.get('/api/calendar', controller.get_appts)
// app.put('/api/calendar', controller.edit_appt)
// app.delete('/api/calendar', controller.delete_appt)
// app.post('/api/calendar', controller.add_appt)








app.listen(port,()=>{
    console.log(`server running on port ${port}`)
})