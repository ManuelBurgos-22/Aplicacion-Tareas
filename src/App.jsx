import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import CardComponent from "./Components/CardComponent"
import NavbarComponent from "./Components/NavbarComponent"

function App() {
  const [count, setCount] = useState(0)

  return (

    <>
      <div>
        <NavbarComponent></NavbarComponent>
      </div>
    </>
  )
}

export default App