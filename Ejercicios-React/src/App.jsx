import Login from './login.jsx'
import './App.css'
import { useState } from 'react'

function App() {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <>
    <button className='btn-ej1' onClick={() => setShowLogin(!showLogin)}>Ejercicio 1 - login</button>
     {showLogin && <Login />}
    </>
  )
}

export default App
