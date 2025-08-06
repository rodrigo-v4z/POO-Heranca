import { useState, useMemo } from 'react'
import './App.css'
import { Cachorro } from './models/Cachorro.ts';
import { Hamster } from './models/Hamster.ts';
import { Administrador } from './models/Administrador.ts';

function App() {  
  const administrador = useMemo(() => new Administrador("nome@email.com"), []);
  const [senha, setSenha] = useState('');
  const [tentativa, setTentativa] = useState(false);
  const [novo_codigo, setNovoCodigo] = useState('');
  const [codigo, setCodigo] = useState('');
  const [tentativa_codigo, setTentativaCodigo] = useState(false);

  return (
    <>
    <div>
        <label>Senha: </label>
        <input onChange={e => {setSenha(e.target.value)}}></input>
        <button onClick={() => setTentativa(administrador.autenticar(senha))}>Entrar</button>
        <br />
        <p>{tentativa ? 'Usuario autenticado!' : 'Senha incorreta!'}</p>
        <hr />
        <p>Adminitrador</p>
        <label> Código Administrador: </label>
        <input onChange={e => {setCodigo(e.target.value)}}></input>
        <button onClick={() => {setTentativaCodigo(administrador.autenticarCodigoSeguranca(codigo))}}> Autenticar Código</button>
        <br />
        <p>{tentativa_codigo ? 'Código Autenticado' : 'Código Incorreto'}</p>
        <br />
        <label>Novo Código de Segurança: </label>
        <input onChange={e => {setNovoCodigo(e.target.value)}}></input>
        <button onClick={() => {administrador.alterarCodigoSeguranca(novo_codigo)}}>Alterar</button>
    </div>
    </>
  )
}

export default App
