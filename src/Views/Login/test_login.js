const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const app = express();


passport.use(new LocalStrategy(
    {usernameField: 'email'},
    (email, password, done) => {
        console.log('Inside local strategy callback')
        const user = users[0]
        if(email === user.email && password === user.password){
            return done(null, user)
        }
    }
));

passport.serializeUser((user,done) => {
    done(null, user.id);
})

app.use(bodyParser());
app.use(session({
    secret: 'psychic friend fredbear',
    resave: false,
    saveUninitialized: true
}))
app.use(passport.initialize());
app.use(passport.session());

app.get('/', (req, res) => {
    res.send('you just hit the home page')
})
app.get('/login', (req, res) => {
    res.send('you got to the login page')
})
app.post('/login', (req, res) => {
    passport.authenticate('local', (err, user, info) => {
        req.login(user, (err) => {
            return res.send('You were authenticated & logged in');
        })
    })(req, res, next);
})




app.listen(3000,() => {
    console.log('Listening on localhost:3000')
})