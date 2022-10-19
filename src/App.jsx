import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Saludo from './components/saludo'
import Boton from './components/boton'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
     <Saludo name="Santiago" apellido="Dreven">
      <h1>ieofjweoi</h1>
      <h2>woiemdoewmo</h2>
     </Saludo>
    </div>

    // <boton color="red" texto="Botón de emergencia">
    //   <button></button>
    // </boton>
  )
  } 

export default App
