import { useState } from 'react'
import './App.css'
import { Cachorro } from './models/Cachorro.ts';

function App() {
  const [count, setCount] = useState(0);
  
  const rex = new Cachorro('Rex');

  return (
    <>
    <div>
        <button onClick={() => {rex.emitirSom()}}>Emitir Som</button>
        <p>{rex.correr()}</p>
      </div>
    </>
  )
}

export default App
