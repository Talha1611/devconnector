const express = require ('express');
const mongoose = require ('mongoose');
const bodyParser= require('body-parser');
const passport = require('passport');

const users = require('./routes/api/users');
const profile = require('./routes/api/profile');
const posts = require('./routes/api/posts');



const app = express(); 

//Body Parser Middleware

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//db config

const db= require('./config/keys').mongoURI;

//Connect to Mongo db

mongoose

.connect(db)
.then(()=>console.log('Mongo DB connected'))
.catch(err => console.log(err));

//app.get('/', (req, res) => { res.send('Hello Homepage!') })


//Passport Middleware

app.use(passport.initialize());

//Passport Config

require('./config/passport')(passport);


//Use routes

app.use('/', users);
app.use('/', profile);
app.use('/', posts);


const port = process.env.PORT || 5000;

app.listen(port, ()=> {console.log(`Example app listening at http://localhost:`, port)});