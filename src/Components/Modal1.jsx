import React from "react";
import Modal from "react-modal";
import "../Modal1.css";

// Configuración para accesibilidad
Modal.setAppElement("#root");

const sendInfo = async () => {
  const inputNombre = document.getElementById('inputNombre').value;
  console.log(inputNombre);

  try {
    const response = await fetch('http://localhost:500/api/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ inputNombre }),
    });
    const data = await response.json();
    console.log(data.message);
  }
  catch (error) {
    console.error('Error:', error);
  }
};

const Modal1 = ({ isOpen, onRequestClose }) => {
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
      <h2 className="modal-header">Editar categoría</h2>
      <form className="modal-form" onSubmit={handleSubmit}>
        <label>Categoría:</label>
        
        <input
          type="text"
          name="Nombre"
          id="inputNombre"
          placeholder="Nombre de la categoría"
          required
        />

        <div className="modal-buttons">
          <button type="button" onClick={onRequestClose} className="btn-close">
          </button>
          <button type="submit" className="btn btn-success">
            Editar categoría
          </button>
        </div>
      </form>
    </Modal>
  );
};

export default Modal1;