//projeto-vite\src\components\InfoCurso\index.jsx

import './style.css';

function InfoCurso() {
   
    const nome = 'Desenvolvimento de sistema';
    const cargaHoraria = '60';
    const local = 'Senai';
    const dataTermino = '25/12/2027';

    return (
        <>
        <div>
            <h2>Dados do Curso</h2>
            <P>Nome: {nome}</P>
            <p>Carga Horaria {cargaHoraria}</p>
            <p>Local: {local}</p>
            <p>Inicio: {inicio}</p>
            <p>Data Termino: {dataTermino} </p>
        </div>
        </>
    );
}

export default InfoCurso;