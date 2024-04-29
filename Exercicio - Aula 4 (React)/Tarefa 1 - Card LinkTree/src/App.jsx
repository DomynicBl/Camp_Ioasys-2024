import { useState } from 'react';
import './App.css';
import Pessoas from './components/Pessoas.jsx';

function App() {
  const [count, setCount] = useState(0);

  return (
    <article >
      <Tarefas nome="Domynic Barros Lima" className="card" />
    </article>
  );
}

export default App;
