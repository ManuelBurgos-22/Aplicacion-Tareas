import React from 'react';
import '../Contacto.css';

function Contacto() {
  return (
    <div className="contact-container">
      <div className="contact-form">
        <h1 className="contact-title">Contacto</h1>
        <p>Hola!<br />¿Cómo te llamas?</p>
        <input type="text" placeholder="Nombre, Apellido" className="input-name" />
        <p className="input-info">Presione Enter</p>
      </div>
      <div className="contact-info">
        <h2>Comunícate Con Nosotros</h2>
        <div className="info-item">
          <span role="img" aria-label="phone">📞</span>
          <p>999 657 1820</p>
        </div>
        <div className="info-item">
          <span role="img" aria-label="email">📧</span>
          <p>info@jncoaching.com</p>
        </div>
        <div className="info-item">
          <span role="img" aria-label="address">📍</span>
          <p>4-1160 Marmier, Quebec, J4K</p>
        </div>
      </div>
    </div>
  );
}
export default Contacto;

