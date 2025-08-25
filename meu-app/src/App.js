//projeto\src\App.js

import React, { useState } from 'react';
import './App.css';
import logo from '../src/assets/imagens/naruto.jpg'

//import AdicionarProduto from './components/AdicionarProduto';
//import ListaDeProdutos from './components/ListaDeProdutos';

function App() {
  const [produtos, setProdutos] = useState(['Mouse', 'Teclado', 'Monitor']);

  const adicionarUsuario = (nome) => {
    const produto = nome.trim();

    if (produtos.includes(produto)) {
      alert('O produto já existe!');
      return;
    }  
    setProdutos([...produtos, produto]);
  };

  return (
    <div className="App">
      <h1>Produtos</h1>
      <AdicionarProduto onAdd={adicionarUsuario} />
      <hr />
      <h2>Lista de produtos</h2>
      <ListaDeProdutos itens={produtos} />
    </div>
  );
}

export default App;


/*
import React, { useState } from 'react';
import './App.css';

function App() {
  // Cria uma variável e um setter (forma de adicionar dados) para o usuário.
  const [usuario, setUsuario] = useState('');

  // Cria uma variável e um setter (forma de adicionar dados) para os usuários.
  // Inicializa com uma lista de usuários pré-definida.
  const [usuarios, setUsuarios] = useState(['Arroz', 'Feijão', 'Lentilha']);

  // Função para verificar se o usuário já existe e adicioná-lo à lista.
  const adicionarUsuario = () => {

    // Se o usuário já existir, exibe um alerta.
    if (usuarios.includes(usuario)) {
      alert('Usuário já existe!');
      return;
    }
   
    // Se não existir, adiciona o usuário à lista e limpa o campo de entrada.
    // Adiciona todos os usuários já existentes e o novo usuário.
    setUsuarios([...usuarios, usuario]);
    setUsuario('');
  };

  return (
    <div className="App">
      <h1>Adicionar produtos</h1>
      <input
        type="text"
        value={usuario}
        onChange={(e) => setUsuario(e.target.value)}
        placeholder="Digite o nome do produto"
      />
      <button onClick={adicionarUsuario}>Adicionar</button>

      <hr />
      <h2>Lista de produtos</h2>
      <ol>
        {usuarios.map((user, index) => (
          <li key={index}>{user}</li>
        ))}
      </ol>
    </div>
  );
}

export default App;

*/