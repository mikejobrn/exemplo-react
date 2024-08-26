import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Botao from './Botao';

export default function App() {
  const [contador, setContador] = useState(0);

  const handleAdicionar = () => {
    setContador( contador + 1 );
  }

  const handleSubtrair = () => {
    setContador( contador - 1 );
  }

  return (
    <div className="App">
      <p>{ contador }</p>
      <Botao texto="Adicionar 1" fn={handleAdicionar} />
      <Botao texto="Subtrair 1" subtrair={true} fn={handleSubtrair} />
    </div>
  );
}
