import { useState } from 'react'
import './App.css'
import Time_coracao from './components/Time_coracao';

function time_coracao() {
  const [count, setCount] = useState(0)

  return (
    <>
       
       <Time_coracao/>
    </>
  )
}

export default time_coracao;
