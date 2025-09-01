import { useState } from 'react'
import './App.css'
import Mensagem from './components/mensagem'
import InfoAluno from './components/InfoAluno'
import InfoCurso from './components/InfoCurso'

function App() {
  const [count, setCount] = useState(0)

  return (
    // Fragment.
    <> 
        <h1>Aula ReactJS</h1>
        <Mensagem />
        <hr />
       
        <InfoAluno />
        <hr />
        <InfoCurso />
        <hr />
      
        
      
    </>
  )
}

export default App
