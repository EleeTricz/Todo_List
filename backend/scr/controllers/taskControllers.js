const taskModels = require('../models/taskmodels');

const getAll = async (_req,res) => {

    const tasks = await taskModels.getAll();

    return res.status(200).json(tasks);
}

const createTask = async (req,res) => {
   const createTask = await taskModels.createTask(req.body);

   return res.status(201).json(createTask);
}

const deleteTask = async (req,res) => {

    const { id } = req.params;

    await taskModels.deleteTask(id);
    return res.status(204).json();
}

const updateTask = async (req, res) => {
    
    const { id } = req.params;

    await taskModels.updateTask(req.body,id);

    return res.status(204).json();

}

module.exports = {
    getAll,
    createTask,
    deleteTask,
    updateTask,
}