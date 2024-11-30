// Função para pegar todas as tasks
export const getTasks = async () => {
    try {
      const response = await fetch('http://localhost:3333/tasks');
      if (!response.ok) {
        throw new Error('Erro ao buscar tasks');
      }
      return response.json(); 
    } catch (error) {
      console.error('Erro:', error);
    }
  };
  
  
  export const addTask = async (task) => {
    try {
      const response = await fetch('http://localhost:3333/tasks', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(task),
      });
      if (!response.ok) {
        throw new Error('Erro ao adicionar task');
      }
      return response.json(); 
    } catch (error) {
      console.error('Erro:', error);
    }
  };

  
  export const updateTask = async (taskId, updatedTask) => {
    try {
      const response = await fetch(`http://localhost:3333/tasks/${taskId}`, {
        method: 'PUT', 
        headers: {
          'Content-Type': 'application/json', 
        },
        body: JSON.stringify(updatedTask), 
      });
  
      if (!response.ok) {
        throw new Error('Erro ao atualizar a task');
      }
  
      const data = await response.json();
      return data; 
    } catch (error) {
      console.error('Erro:', error);
      return null;
    }
  };

  export const deleteTask = async (taskId) => {
    try {
      const response = await fetch(`http://localhost:3333/tasks/${taskId}`, {
        method: 'DELETE', 
      });
  
      if (!response.ok) {
        throw new Error('Erro ao deletar a task');
      }
  
      return true; 
    } catch (error) {
      console.error('Erro:', error);
      return false; 
    }
  };
  
  export const updateTaskStatus = async (taskId, updatedTask) => {
    try {
      const response = await fetch(`http://localhost:3333/tasks/${taskId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedTask),
      });
  
      if (!response.ok) {
        throw new Error('Erro ao atualizar a task');
      }
  
      return true; 
    } catch (error) {
      console.error('Erro:', error);
      return false; 
    }
  };
  
    
  