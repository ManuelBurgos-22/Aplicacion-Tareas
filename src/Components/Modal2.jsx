import React, { useState } from "react";
import Modal from 'react-modal';
import "../Modal1.css";

// Configuración para accesibilidad
Modal.setAppElement("#root");

const Modal2 = ({ isOpen, onRequestClose }) => {
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
      <h2 className="modal-header">Editar Pedido</h2>
      <form onSubmit={handleSubmit} className="modal-form">
        <label>Nombre del Pedido:</label>
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleInputChange}
          placeholder="Nombre"
          required
        />

        <label>Pedido:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          placeholder="Pedido"
          required
        />

        <label>Total:</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleInputChange}
          placeholder="Total"
          minLength="8"
          required
        />

        <div className="modal-buttons">
          <button type="button" onClick={onRequestClose} className="btn-close">
          </button>
          <button type="submit" className=" btn btn-success">
            Editar Pedido
          </button>
        </div>
      </form>
    </Modal>
  );
};

export default Modal2;