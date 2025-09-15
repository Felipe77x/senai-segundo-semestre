// cadastro-usuario\src\Components\Cadastro_usuario\index.js
import { useState } from 'react'

function cadastro_usuario() {
  const [nome, setNome] = useState('')
  const [lista, setLista] = useState([])

  const handleChange = (e) => {
    setNome(e.target.value)
  }

  const adicionarNome = () => {
    if (nome.trim() !== '') {
      setLista([...lista, nome.trim()])
      setNome('') // limpa o input
    }
  }

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Lista de Nomes</h1>
      
      <input
        type="text"
        placeholder="Digite um nome"
        value={nome}
        onChange={handleChange}
      />
      
      <button onClick={adicionarNome} style={{ marginLeft: '8px' }}>
        Adicionar
      </button>

      <ul style={{ marginTop: '1rem' }}>
        {lista.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  )
}


export default cadastro_usuario;