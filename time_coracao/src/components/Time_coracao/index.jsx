// time_coracao\src\components\Time_coracao\index.jsx


import React, { useState } from 'react';
import './styles.css';
import real from '../../assets/real.jpg'

const time_coracao = () => {
    const [nome, setNome] = useState('');
    const [numero, setNumero] = useState('');
    const [jogadores, setJogadores] = useState([]);

    const adicionarJogador = (e) => {
        e.preventDefault();
        
        if (nome && numero) {
            setJogadores([...jogadores, { nome, numero }]);
            setNome('');
            setNumero('');
        } else {
            alert('Por favor, preencha todos os campos.');
        }
    };

    return (
        <div>
            {/* Imagem do Real Madrid */}
            <div style={{ textAlign: 'center', marginBottom: '20px' }}>
                <img 
                    src={real}
                    alt="Escudo do Real Madrid" 
                    width="150" // Definindo o tamanho da imagem
                />
            </div>
            
            <h1>Cadastro de Jogadores</h1>
            <form onSubmit={adicionarJogador}>
                <div>
                    <label>Nome: </label>
                    <input
                        type="text"
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                    />
                </div>
                <div>
                    <label>Número: </label>
                    <input
                        type="number"
                        value={numero}
                        onChange={(e) => setNumero(e.target.value)}
                    />
                </div>
                <button type="submit">Adicionar Jogador</button>
            </form>

            <h2>Lista de Jogadores</h2>
            <ul>
                {jogadores.map((jogador, index) => (
                    <li key={index}>
                        {jogador.nome} - Número: {jogador.numero}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default time_coracao;
