import React, { useState, useEffect } from 'react';
import './style.css'

function Home() {
  const [tasks, setTasks] = useState([]);


   // Função para buscar tasks do backend
   useEffect(() => {
    fetch('http://localhost:3333/tasks') // Substitua pela URL da sua API
      .then((response) => {
        if (!response.ok) {
          throw new Error('Erro ao buscar tasks');
        }
        return response.json(); // Parse para JSON
      })
      .then((data) => {
        setTasks(data); // Atualiza o estado com as tasks
      })
      .catch((error) => {
        console.error('Erro:', error);
      });
  }, []);

  return (
    

    <div>
      <div className='form'>
        <form className='add-form'>
          <input name='title' type='text' placeholder='Digite o Titulo da Task'/>
          <button type='submit'>
          <span className="material-symbols-outlined">add</span>
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
            {tasks.map((task) => {
              const formattedDate = new Date(task.created_at).toLocaleDateString('pt-BR', {
                day: '2-digit',
                month: '2-digit',
                year: 'numeric',
              });

              return (
                <tr key={task.id}>
                  <td>{task.title}</td>
                  <td>{formattedDate}</td>
                  <td>
                    <select defaultValue={task.status}>
                      <option value="pendente">pendente</option>
                      <option value="em andamento">em andamento</option>
                      <option value="concluída">concluída</option>
                    </select>
                  </td>
                  <td>
                    <button className="btn-action">
                      <span className="material-symbols-outlined">edit</span>
                    </button>
                    <button className="btn-action">
                      <span className="material-symbols-outlined">delete</span>
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>

            

          </table>
      </div>
    </div>


  )
}

export default Home
