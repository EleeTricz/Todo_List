import { useState, useEffect } from 'react';
import './style.css';
import { getTasks, addTask, updateTask, deleteTask, updateTaskStatus } from '../../services/taskServices'; // Importa as funções
import { formatDate } from '../../utils/formatDate'; 

function Home() {
  const [tasks, setTasks] = useState([]);
  const [taskTitle, setTaskTitle] = useState(''); 
  const [editingTask, setEditingTask] = useState(null); 

  
  useEffect(() => {
    const fetchTasks = async () => {
      const data = await getTasks(); 
      if (data) {
        setTasks(data); 
      }
    };
    fetchTasks();
  }, []); 

  // Função para adicionar nova task
  const handleAddTask = async (e) => {
    e.preventDefault();
    if (!taskTitle) return; 

    const newTask = {
      title: taskTitle,
    };

    const addedTask = await addTask(newTask); 
    if (addedTask) {
      setTasks([...tasks, addedTask]); 
      setTaskTitle(''); 
    }
    window.location.reload(); 
  };

  
  const handleEditTask = (task) => {
    setEditingTask(task); 
    setTaskTitle(task.title); 
  };

  
  const handleSaveEditTask = async (e) => {
    e.preventDefault();
    if (!taskTitle || !editingTask) return;

    const updatedTask = {
      title: taskTitle,
      status: editingTask.status,
    };

    const updatedTaskFromApi = await updateTask(editingTask.id, updatedTask); 

    if (updatedTaskFromApi) {
     
      setTasks(
        tasks.map((task) =>
          task.id === editingTask.id ? updatedTaskFromApi : task
        )
      );
      setTaskTitle(''); 
      setEditingTask(null); 
    }
    window.location.reload(); 
  };

  
  const handleDeleteTask = async (taskId) => {
    const isDeleted = await deleteTask(taskId);

    if (isDeleted) {
      
      setTasks(tasks.filter((task) => task.id !== taskId));
    } else {
      alert('Erro ao deletar a task!');
    }
  };

  
const handleChangeStatus = async (taskId, newStatus) => {
  
  const taskToUpdate = tasks.find((task) => task.id === taskId);

  if (!taskToUpdate) return; 

  const updatedTask = {
    title: taskToUpdate.title, 
    status: newStatus, 
  };

  const isUpdated = await updateTaskStatus(taskId, updatedTask); 

  if (isUpdated) {
    
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, status: newStatus } : task
      )
    );
  } else {
    alert('Erro ao atualizar o status!');
  }
};

  return (
    <div>
      <div className="form">
        <form
          className="add-form"
          onSubmit={editingTask ? handleSaveEditTask : handleAddTask}
        >
          <input
            name="title"
            type="text"
            value={taskTitle}
            onChange={(e) => setTaskTitle(e.target.value)} // Atualiza o título da task
            placeholder="Digite o título da tarefa aqui"
            maxLength={45}
          />
          <button type="submit">
            <span className="material-symbols-outlined">
              {editingTask ? 'save' : 'add'}
            </span>
          </button>
        </form>

        <table>
          <thead>
            <tr>
              <th>Task</th>
              <th>Created At</th>
              <th>Status</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((task) => (
              <tr key={task.id}>
                <td>{task.title}</td>
                <td>{formatDate(task.created_at)}</td>
                <td>
                  <select
                    value={task.status}
                    onChange={(e) => handleChangeStatus(task.id, e.target.value)}
                  >
                    <option value="pendente">pendente</option>
                    <option value="em andamento">em andamento</option>
                    <option value="concluída">concluída</option>
                  </select>
                </td>
                <td>
                  <button
                    className="btn-action"
                    onClick={() => handleEditTask(task)}
                  >
                    <span className="material-symbols-outlined">edit</span>
                  </button>
                  <button
                    className="btn-action"
                    onClick={() => handleDeleteTask(task.id)}
                  >
                    <span className="material-symbols-outlined">delete</span>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Home;
