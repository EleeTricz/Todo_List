const express = require('express');
const taskController = require('./controllers/taskControllers')
const middleware = require('./middlewares/tasksMiddleware')


const router = express.Router();


router.get('/tasks', taskController.getAll);
router.post('/tasks',middleware.validateFieldTitle, taskController.createTask);
router.delete('/tasks/:id', taskController.deleteTask);
router.put('/tasks/:id',middleware.validateFieldTitle, middleware.validateFieldStatus, taskController.updateTask);

module.exports = router;