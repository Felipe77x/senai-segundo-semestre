import { Routes, Route} from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Servicos from './pages/Servicos'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='app'> 
        <Header/>
      <main className='container'>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/servicos' element={<Home/>}/>
            <Route path='/sobre-nos' element={<Servicos/>}/>
            <Route path='/fale-conosco' element={<SobreNos/>}/>
            <Route path='/fale-conosco' element={<FaleConosco/>}/>
        </Routes>
      </main>
      <Footer/>
          
      </div>
   
    </>
  )
}

export default App 
