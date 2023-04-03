const express = require("express");
const app = express();
const port = process.env.PORT || 8080;
const expressLayouts = require("express-ejs-layouts");
const dotenv = require("dotenv");
const db = require('./config/mysql');
const bodyParser = require("body-parser");
const session = require("express-session");
dotenv.config();


app.use(bodyParser.urlencoded({ extended:true}));
app.use(bodyParser.json());
app.use(expressLayouts);
app.set("view engine", "ejs");

app.use(session({
    secret : 'secret',
    resave : true,
    saveUninitialized : true
  }));

app.use('/', require('./routes'));

app.listen(process.env.PORT, function(err){
    if(err){
        console.log(`Error in running the server : ${err}`);
        return;
    }
    console.log(`Server is up and running on port : ${process.env.PORT}`);
})