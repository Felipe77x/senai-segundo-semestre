//projeto-vite\src\components\InfoAluno\index.jsx

import './style.css';

function InfoAluno() {
    const nome = 'Felipe Dias';
    const idade = 20;
    const curso = 'Desenvolvimento de Sistema';

    return (
        <>
        <div>
            <h2>Informações do aluno</h2>
            <P>Nome: {nome}</P>
            <p>Idade: {idade}</p>
            <p>Curso: {curso} </p>
        </div>
      </>
    );
}

export default InfoAluno;