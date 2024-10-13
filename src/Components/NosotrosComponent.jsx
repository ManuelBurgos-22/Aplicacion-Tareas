import React from 'react';
import '..NosotrosComponent.css';
import NavbarComponent from "./NavbarComponent";
import FooterComponent from "./FooterComponent";

function NosotrosComponent() {
    return (
        <>
            <NavbarComponent />
            <div className="nosotros-container">
                <h1 className="nosotros-title">Sobre nosotros</h1>
                
                <div className="nosotros-info">
                    <p>
                        Somos un equipo de estudiantes pertenecientes a la carrera de Entornos Virtuales y Negocios Digitales en la Universidad Tecnológica Metropolitana.
                    </p>
                    <p>
                        Nuestro mayor objetivo se encuentra en la innovación y el desarrollo de proyectos de calidad.
                    </p>
                </div>
            </div>
            <FooterComponent />
        </>
    );
}

export default NosotrosComponent;