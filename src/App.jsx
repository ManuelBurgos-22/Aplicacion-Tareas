import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from "react"; // Importa useState para el manejo de estado
import NavbarComponent from "./Components/NavbarComponent";
import InfoComponent from "./Components/InfoComponent";
import ImgComponent from "./Components/ImgComponent";
import FooterComponent from "./Components/FooterComponent";
import CardComponent from "./Components/CardComponent";
import ContactoComponent from "./Components/ContactoComponent";
import NosotrosComponent from "./Components/NosotrosComponent";
import TablaCategoriaComponent from "./Components/TablaCategoriasComponent";
import TablaPedidosComponent from "./Components/TablaPedidosComponent";
import TablaProductosComponent from "./Components/TablaProductosComponent";
import TablaReseñasComponent from "./Components/TablaReseñasComponent";
import TablaUsuariosComponent from "./Components/TablaUsuariosComponent";

function App() {
  return (
    <Router> {/* Envolver la aplicación en Router */}
      <div style={{ width: '100%', overflow: 'hidden' }}>
        <NavbarComponent /> {/* Navbar se mantiene */}
        <Routes> {/* Definir rutas */}
          <Route path="/" element={
            <>
              <InfoComponent />
              <ImgComponent />
              <CardComponent />
            </>
          } />
          <Route path="/nosotros" element={<NosotrosComponent />} />
          <Route path="/contactos" element={<ContactoComponent />} />
          <Route path="/categorias" element={<TablaCategoriaComponent />} />
          <Route path="/pedidos" element={<TablaPedidosComponent />} />
          <Route path="/productos" element={<TablaProductosComponent />} />
          <Route path="/reseñas" element={<TablaReseñasComponent />} />
          <Route path="/usuarios" element={<TablaUsuariosComponent />} />
        </Routes>
        <FooterComponent /> {/* Footer se mantiene */}
      </div>
    </Router>
  );
}

export default App;


{/* <TablaCategoriaComponent />
<TablaPedidosComponent />
<TablaProductosComponent />
<TablaReseñasComponent />
<TablaUsuariosComponent /> */}