import React from "react";
import Modal from "react-modal";
import "../Modal1.css";

// Configuración para accesibilidad
Modal.setAppElement("#root");

const sendInfo = async () => {
  const NomProducto = document.getElementById('NomProducto').value;
  const NomUsuario = document.getElementById('NomUsuario').value;
  const Calificacion = document.getElementById('Calificacion').value;
  const Comentario = document.getElementById('Comentario').value;
  const Fecha = document.getElementById('Fecha').value;
  console.log(NomProducto);
  console.log(NomUsuario);
  console.log(Calificacion);
  console.log(Comentario);
  console.log(Fecha);

  try {
    const response = await fetch('http://localhost:500/api/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ NomProducto, NomUsuario, Calificacion, Comentario, Fecha}),
    });
    const data = await response.json();
    console.log(data.message);
  }
  catch (error) {
    console.error('Error:', error);
  }
};

const Modal4 = ({ isOpen, onRequestClose }) => {
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
      <h2 className="modal-header">Editar productos</h2>
      <form className="modal-form" onSubmit={handleSubmit}>
        <label>Productos:</label>

        <input
          type="text"
          id="NomProducto"
          placeholder="Nombre del producto"
          required
        />

        <input
          type="text"
          id="NomUsuario"
          placeholder="Nombre del usuario"
          required
        />

        <input
          type="number"
          id="Calificacion"
          placeholder="Calificación"
          required
        />

        <input
          type="text"
          id="Comentario"
          placeholder="Comentario"
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
            Editar producto
          </button>
        </div>
      </form>
    </Modal>
  );
};

export default Modal4;