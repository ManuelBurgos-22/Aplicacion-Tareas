import React from "react";
import Modal from "react-modal";
import "../Modal1.css";

// Configuración para accesibilidad
Modal.setAppElement("#root");

const sendInfo = async () => {
  const NomUsuario = document.getElementById('NomUsuario').value;
  const Correo = document.getElementById('Correo').value;
  const Fecha = document.getElementById('Fecha').value;
  console.log(NomUsuario);
  console.log(Correo);
  console.log(Fecha);

  try {
    const response = await fetch('http://localhost:500/api/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ NomUsuario, Correo, Fecha }),
    });
    const data = await response.json();
    console.log(data.message);
  }
  catch (error) {
    console.error('Error:', error);
  }
};

const Modal2 = ({ isOpen, onRequestClose }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    sendInfo();
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      style={{
        content: {
          top: "50%",
          left: "50%",
          right: "auto",
          bottom: "auto",
          marginRight: "-50%",
          transform: "translate(-50%, -50%)",
          width: "400px",
        },
      }}
    >
      <h2 className="modal-header">Editar usuario</h2>
      <form className="modal-form" onSubmit={handleSubmit}>
        <label>Usuario:</label>

        <input
          type="text"
          id="NomUsuario"
          placeholder="Nombre del usuario"
          required
        />

        <input
          type="email"
          id="Correo"
          placeholder="Correo"
          required
        />

        <input
          type="date"
          id="Fecha"
          placeholder="Fecha"
          required
        />

        <div className="modal-buttons">
          <button type="button" onClick={onRequestClose} className="btn-close">
          </button>
          <button type="submit" className="btn btn-success">
            Editar usuario
          </button>
        </div>
      </form>
    </Modal>
  );
};

export default Modal2;