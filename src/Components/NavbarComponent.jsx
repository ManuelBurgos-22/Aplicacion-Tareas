import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function NavbarComponent() {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: '#171717', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection:'column' }}>
                <div className="container px-5">
                    <a className="navbar-brand" href="#!">Nissan</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/nosotros">Nosotros</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/contactos">Contactos</Link>
                            </li>
                            <select name="" id="" onchange="" style={{background:'#171717', color:'grey', border:'none'}}>
                                <option value="">Catálogos</option>
                                <option value="/categorias">Categorías</option>
                                <option value="/pedidos">Pedidos</option>
                                <option value="/productos">Productos</option>
                                <option value="/usuarios">Usuarios</option>
                                <option value="/reseñas">Reseñas</option>
                            </select>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default NavbarComponent;