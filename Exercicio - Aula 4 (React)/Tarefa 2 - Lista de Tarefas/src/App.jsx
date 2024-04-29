import React, { useState } from 'react';
import './App.css';
import Tarefas from './components/Tarefas.jsx';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Tarefas />
    </div>
  );
}

export default App;
