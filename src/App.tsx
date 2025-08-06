import { useState } from 'react'
import './App.css'
import { Cachorro } from './models/Cachorro.ts';
import { Hamster } from './models/Hamster.ts';

function App() {
  const [count, setCount] = useState(0);
  
  const rex = new Cachorro('Rex');
  const hamster = new Hamster('Julio');

  return (
    <>
    <div>
        <button onClick={() => {hamster.emitirSom()}}>{hamster.emitirSom()}</button>
        <p>{rex.correr()}</p>
      </div>
    </>
  )
}

export default App
