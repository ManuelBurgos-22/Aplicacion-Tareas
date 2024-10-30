import React, { useState } from "react";
import Modal from 'react-modal';
import "../Modal1.css";

// Configuración para accesibilidad
Modal.setAppElement("#root");

const Modal3 = ({ isOpen, onRequestClose }) => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: ""
  });

  // Maneja cambios en los inputs
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Envía el formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Datos del formulario:", formData);
    onRequestClose();
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
          width: "400px"
        },
      }}
    >
      <h2 className="modal-header">Editar producto</h2>
      <form onSubmit={handleSubmit} className="modal-form">
        <label>Nombre del producto:</label>
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleInputChange}
          placeholder="Nombre"
          required
        />

        <label>Descripción:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          placeholder="Descripción"
          required
        />

        <label>Precio:</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleInputChange}
          placeholder="Precio"
          minLength="8"
          required
        />

        <label>Categoria:</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleInputChange}
          placeholder="Categoria"
          minLength="8"
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