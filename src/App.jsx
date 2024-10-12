import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import CardComponent2 from "./Components/CardComponent2"
import NavbarComponent from "./Components/NavbarComponent"
import InfoComponent from "./Components/InfoComponent"
import ImgComponent from "./Components/ImgComponent"
import FooterComponent from "./Components/FooterComponent"
import CardComponent from "./Components/CardComponent"



function App() {
  const [count, setCount] = useState(0)

  return (

    <>
      <div style={{backgroundColor:'#EDEDED', margin:'0', padding:'0', boxSizing:'border-box'}}>
        <div>
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
          <CardComponent></CardComponent>
        </div>
        <div>
          <FooterComponent></FooterComponent>
        </div>
        
        </div>
      </div>
    </>
  )
}

export default App