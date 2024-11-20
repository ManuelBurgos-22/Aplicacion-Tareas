import React from "react";
import Modal from "react-modal";
import "../Modal1.css";

// Configuración para accesibilidad
Modal.setAppElement("#root");

const sendInfo = async () => {
  const NomProducto = document.getElementById('NomProducto').value;
  const Descripcion = document.getElementById('Descripcion').value;
  const Precio = document.getElementById('Precio').value;
  const Categoria = document.getElementById('Categoria').value;
  console.log(NomProducto);
  console.log(Descripcion);
  console.log(Precio);
  console.log(Categoria);

  try {
    const response = await fetch('http://localhost:500/api/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ NomProducto, Descripcion, Precio, Categoria }),
    });
    const data = await response.json();
    console.log(data.message);
  }
  catch (error) {
    console.error('Error:', error);
  }
};

const Modal3 = ({ isOpen, onRequestClose }) => {
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
          id="Descripcion"
          placeholder="Descripción"
          required
        />

        <input
          type="number"
          id="Precio"
          placeholder="Precio"
          required
        />

        <input
          type="text"
          id="Categoria"
          placeholder="Categoría"
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

export default Modal3;