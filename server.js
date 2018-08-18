require('dotenv').config();
const express = require('express');
const session = require('express-session');
const cors = require('cors');
const bodyParser = require('body-parser');
const massive = require('massive');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const axios = require('axios');
const flash = require('connect-flash');
const request = require('request');
const path = require('path');
const bcrypt = require('bcrypt');

const app = express();

const dbConfig = {};
const pool = new pg.Pool(dbConfig)
pool.on('error', function(err){
    winston.error('idle client error', err.message, err.stack)
})

massive(process.env.CONNECTION_STRING)
    .then((dbInstance)=>{
        app.set('db', dbInstance)
        console.log('connect to db')
    })

app.use(cors());
app.use(bodyParser.json());
app.use( session({
    secret: 'psychic friend fredbear',
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy((email, password, cb) => {
    db.query('SELECT client_id, client_email, client_password FROM client_info where client_email=$1',
      [username],
      (err, result) => {
        if(err) {
            winston.error('Error when selecting user on login', err)
            return cb(err)
        }

        if(result.rows.length > 0) {
            const first = result.rows[0]
            bcrypt.compare(password, first.password, function(err, res) {
                if(res){
                    cb(null, {id: first.id,
                        username: first.username,
                        type: first.type}
                    )
                } else {
                    cb(null, false)
                }
            })
        } else {
            cb(null, false)
        }
    })
}));

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, cb) => {
    db.query('SELECT client_id, client_email FROM client_info WHERE client_id=$1',
    [parseInt(id, 10)], (err, results) => {
        if(err){
            winston.error('Error when selecting user on session deserialize', err)
            return cb(err)
        }

        cb(null, results.rows[0])
    })
})


app.get('/login', (req, res, next) => {
    if (req.isAuthenticated()){
        res.redirect('/dashboard');
    } else {
        res.render('login', {title: "Log in", 
            userData: req.user, 
            messages: {
                danger: req.flash('danger'),
                warning: req.flash('warning'),
                success: req.flash('success')}
            }
        );
    }
});

app.post('/login', passport.authenticate('local', {
    successRedirect: '/dashboard',
    failureRedirect: '/login',
    failureFlash: true
    }), function(req, res){
        if(req.body.remember){
            req.session.cookie.maxAge = 30 * 24 * 60 * 60 * 1000
        } else {
            req.session.cookie.expires = false;
        }
        res.redirect('/login');
    }
);

app.get('/logout', function(req, res){
    console.log(req.isAuthenticated());
    req.logout();
    console.log(req.isAuthenticated());
    req.flash('success', "Logged out.");
    res.redirect('/login');
});



const port = process.env.PORT || 3050;

app.listen(port,()=>{
    console.log(`server running on port ${port}`);
})