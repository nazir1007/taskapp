const db = require('../config/mysql');

module.exports.getTask = function (req, res) {
    db.query("select * from taskapp_table", (err, rows) => {
        if(err){
            console.log(err);
        } else {
            res.render("dashboard", {rows});
        }
    })

}

module.exports.createTask = function (req, res){
    const task = req.body.task;

    try{
        db.query("INSERT into taskapp_table (task) values(?)",
         [task],
         (err, rows) => {
            if(err){
                console.log(err);
            } else {
                res.redirect('/task');
            }
        })
    } catch (err){
        console.log(err);
    }
}

module.exports.editTask = function(req, res) {
    const id_data = req.body.hidden_id;
    const task_data = req.body.task;

    const updateQuery = "update taskapp_table set task=? where id=?";

    db.query( updateQuery,
        [task_data, id_data],
        (err, rows) => {
            if(err){
                console.log(err);
            } else {
                res.redirect("/task")
            }
        }
    )
}

module.exports.updateTask = function (req, res) {

    const updateData = "select * from  taskapp_table where id=?";
    db.query(updateData, req.query.id, (err, eachRow) => {
      if (err) {
        res.send(err);
      } else {
        result = JSON.parse(JSON.stringify(eachRow[0]));  
        res.render("edit", { data: eachRow[0] });
      }
    });
};

module.exports.deleteTask = function (req, res) {
    const deleteQuery = "delete from taskapp_table where id=?";

    db.query(deleteQuery, [req.query.id], (err, rows) => {
        if(err){
            console.log(err);
        } else {
            res.redirect('/task');
        }
    })
}
