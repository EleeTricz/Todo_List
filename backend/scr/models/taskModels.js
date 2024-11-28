const connection = require('./connection');


const  getAll = async () => {
    const [tasks] = await connection.execute('SELECT * FROM tasks');
    return tasks;
};

const createTask = async (task) => {
    const {title} = task;

    const dateUTC = new Date(Date.now()).toUTCString();

    const querry = 'INSERT INTO tasks(title,status,created_at) VALUES(?,?,?)';

    const [createdTask] = await connection.execute(querry, [title, 'pendente' ,dateUTC]);

    return {insertID: createdTask.insertId};
}

const deleteTask = async (id) => {

    const querry = 'DELETE FROM tasks WHERE id = ?';

    const [removedTask] = await connection.execute(querry, [id]);

}

const updateTask = async (task, id) => {
    
    const { title, status } = task;

    const querry = 'UPDATE tasks SET title = ?, status = ? WHERE id = ?';

    const [updatedTask] = await connection.execute(querry, [title, status, id]);
    return updateTask;
}

module.exports = {
    getAll,
    createTask,
    deleteTask,
    updateTask,
};