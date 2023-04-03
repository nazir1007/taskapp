const db = require('../config/mysql');

module.exports.userLogin = function(req, res) {
    const email = req.body.email;
    const password = req.body.password;

    if(email && password) {
        query = `
        SELECT * FROM user_table 
        WHERE email = "${email}" `;

        db.query(query, function(error, data){
         if(data.length > 0){
                for(var count = 0; count < data.length; count++){
                    if(data[count].password == password)
                    {
                        req.session.id = data[count].id;

                        res.redirect("/task");
                    }
                    else
                    {
                        res.send('Incorrect Password');
                    }
                }
            }
            else
            {
                res.send('Incorrect Email Address');
            }
            res.end();
        });
    }
    else
    {
        res.send('Please Enter Email Address and Password Details');
        res.end();
    }

}

module.exports.userLogout = function(req, res){
        res.redirect('/');
    }   
 


