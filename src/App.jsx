import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Importar react-router-dom
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComponent from "./Components/NavbarComponent";
import InfoComponent from "./Components/InfoComponent";
import ImgComponent from "./Components/ImgComponent";
import FooterComponent from "./Components/FooterComponent";
import CardComponent from "./Components/CardComponent";
import ContactoComponent from "./Components/ContactoComponent"; // Importar el componente Contacto
import NosotrosComponent from "./Components/NosotrosComponent"; // Importar el componente Nosotros

function App() {
  return (
    <Router> {/* Envolver la aplicación en Router */}
      <div style={{ backgroundColor: '#EDEDED', width:'200vh',}}>
        <NavbarComponent /> {/* Navbar se mantiene */}
        <Routes> {/* Definir rutas */}
          <Route path="/" element={
            <>
              <InfoComponent /> {/* Ruta para el home */}
              <ImgComponent /> {/* Mostrar ImgComponent solo en Home */}
              <CardComponent /> {/* Mostrar CardComponent solo en Home */}
            </>
          } />
          <Route path="/nosotros" element={<NosotrosComponent />} /> {/* Ruta para el componente Contacto */}
          <Route path="/contactos" element={<ContactoComponent />} /> {/* Ruta para el componente Contacto */}
        </Routes>
        <FooterComponent /> {/* Footer se mantiene */}
      </div>
    </Router>
  );
}

export default App;