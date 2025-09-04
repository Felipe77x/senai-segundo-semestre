// src\components\InfoAluno\index.jsx
import { useState } from 'react'
import './style.css'

function InfoAluno() {

const [usuario, setUsuario] = useState('Carlos')
const [idade, setIdade]  = useState(20)
const [email, setEmail] = useState('dias20felipe@gmail.com')
const [peso, setPeso] = useState(1.8)   



    return  ( 
    
  <>
  
  <h1>Dados do usuario</h1>
  <p>Nome: {usuario}</p>
  <p>Idade: {idade} </p>
  <p>Email: {email} </p>
  <p>Peso: {peso} peso </p>

  </>

    );
}

export default InfoAluno; 