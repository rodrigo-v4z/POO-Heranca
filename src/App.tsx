import { useState } from 'react'
import './App.css'
import { Cachorro } from './models/Cachorro.ts';
import { Hamster } from './models/Hamster.ts';

function App() {
  const [count, setCount] = useState(0);
  
  const rex = new Cachorro('Rex');
  const bolinha = new Hamster('Bolinha');

  return (
    <>
    <div>
        <p>🐕 Cachorro: {rex.getNome()}</p>
        <button onClick={() => {rex.emitirSom()}}>{rex.emitirSom()}</button>
        <p>{rex.correr()}</p>
        <hr />
        <p>🐹 Cachorro: {bolinha.getNome()}</p>
        <button onClick={() => {bolinha.emitirSom()}}>{bolinha.emitirSom()}</button>
        <p>{bolinha.comerSemente()}</p>
        <hr />
    </div>
    </>
  )
}

export default App
