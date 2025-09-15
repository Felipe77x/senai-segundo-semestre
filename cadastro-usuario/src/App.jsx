import { useState } from 'react'
import './App.css'
import Cadastro_usuario from './Components/Cadastro_usuario'

function App() {
  const [count, setCount] = useState(0)


  return (
    <>
    <h1>Cadastro de usuario</h1>
    <Cadastro_usuario />
    
    </>
  )
}

export default App
