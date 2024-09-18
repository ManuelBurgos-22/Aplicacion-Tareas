import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import CardComponent from "./Components/CardComponent"
import NavbarComponent from "./Components/NavbarComponent"
import InfoComponent from "./Components/InfoComponent"
import ImgComponent from "./Components/ImgComponent"
import FooterComponent from "./Components/FooterComponent"



function App() {
  const [count, setCount] = useState(0)

  return (

    <>
      <div>
        <NavbarComponent></NavbarComponent>
      </div>
      <div>
        <InfoComponent></InfoComponent>
      </div>
      <div>
        <ImgComponent></ImgComponent>
      </div>
      <div>
        <FooterComponent></FooterComponent>
      </div>

    </>
  )
}

export default App