const express = require('express');
const router = express.Router();

const taskController = require('../controller/task_controller');

router.get('/', (req, res) => {
      res.render('welcome');
});

//router.get('/create', taskController.create)
router.post('/create', taskController.createTask);
router.get('/task', taskController.getTask)
router.get('/delete', taskController.deleteTask);
router.post('/edit', taskController.editTask);
router.get('/update', taskController.updateTask);

router.use('/users', require('./users'));

module.exports = router;