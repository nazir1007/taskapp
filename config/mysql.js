const dotenv = require("dotenv");
const mysql = require("mysql");
dotenv.config();

const db = mysql.createConnection({
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,

})

db.connect((error) =>{
    if(error){
        return console.log(error);
    }
    console.log('Successfully connected to the database');
}) 

module.exports = db;