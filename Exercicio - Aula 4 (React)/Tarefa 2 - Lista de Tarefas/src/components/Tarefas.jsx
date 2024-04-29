import React, { useState } from 'react';
import AddTask from './Form.jsx';
import Search from './Search.jsx';
import Filter from './Filter.jsx';

function Tarefas() {
  const [tarefas, setTarefas] = useState([
    {
      id: 1,
      title: 'Estudar React',
      description: 'Aprender React.js para desenvolvimento web',
      category: 'Estudos',
      completed: true,
    },
    {
      id: 2,
      title: 'Fazer o almoço',
      description: 'Preparar uma refeição saudável e gostosa',
      category: 'Casa',
      completed: true,
    },
    {
      id: 3,
      title: 'Fazer compras',
      description: 'Comprar itens essenciais para casa',
      category: 'Casa',
      completed: false,
    },
    {
      id: 4,
      title: 'Fazer exercícios',
      description: 'Praticar exercícios físicos para manter a saúde em dia',
      category: 'Saúde',
      completed: false,
    },
  ]);

  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");

  const addTask = (title, description, category) => {
    setTarefas([...tarefas, { id: uuid(), title, description, category, completed: false }]);
  };

  const removeTask = (id) => {
    const newTasks = tarefas.filter((task) => task.id !== id);
    setTarefas(newTasks);
  };

  const completeTask = (id) => {
    const updatedTasks = tarefas.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    setTarefas(updatedTasks);
  };

  const uuid = () => {
    return Math.random().toString(36).substr(2, 9);
  };

  return (
    <div className="Lista_de_Tarefas">
        
      <AddTask addTask={addTask} />
      {tarefas.length === 0 ? (
        <h1 className='noTasks'>Nenhuma tarefa cadastrada</h1>
      ) : (
        <div className="infos">
          <div className="extra">
            <Search search={search} setSearch={setSearch}/>
            <Filter filter={filter} setFilter={setFilter} />
          </div>
          <div className="cont">
            <p>Total: {tarefas.length}</p>
            <p>Completas: {tarefas.filter((tarefa) => tarefa.completed).length}</p>
          </div>
        </div>
      )}
      <div className="Tarefas">
        {tarefas.filter((tarefa) => {
          if (filter === "All") {
            return true;
          } else if (filter === "Completed") {
            return tarefa.completed;
          } else {
            return !tarefa.completed;
          }
        })
        .filter((tarefa) => tarefa.title.toLowerCase().includes(search.toLowerCase()))
        .map((tarefa) => (
          <div className="todoList" key={tarefa.id}>
            <div className="todoItem">
              <div className='teste'>
                <h1 onClick={() => completeTask(tarefa.id)} style={{ textDecoration: tarefa.completed ? 'line-through' : 'none', color: tarefa.completed ? '#47474a' : '#f0e3ca'  }}>
                  {tarefa.title}
                </h1>
                <p style={{ textDecoration: tarefa.completed ? 'line-through' : 'none', color: tarefa.completed ? '#47474a' : '#f0e3ca' }}>
                  {tarefa.description}
                </p>
              </div>
              <button title="Excluir" onClick={() => removeTask(tarefa.id)}>X</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Tarefas;
