import React from "react";
import Modal from "react-modal";
import "../Modal1.css";

// Configuración para accesibilidad
Modal.setAppElement("#root");

const sendInfo = async () => {
  const NomCliente = document.getElementById('NomCliente').value;
  const NumPedidos = document.getElementById('NumPedidos').value;
  const Total = document.getElementById('Total').value;
  console.log(NomCliente);
  console.log(NumPedidos);
  console.log(Total);

  try {
    const response = await fetch('http://localhost:500/api/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ NomCliente, NumPedidos, Total }),
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
      <h2 className="modal-header">Editar pedidos</h2>
      <form className="modal-form" onSubmit={handleSubmit}>
        <label>Pedido:</label>

        <input
          type="text"
          id="NomCliente"
          placeholder="Nombre del cliente"
          required
        />

        <input
          type="number"
          id="NumPedidos"
          placeholder="Número de pedidos"
          required
        />

        <input
          type="number"
          id="Total"
          placeholder="Total"
          required
        />

        <div className="modal-buttons">
          <button type="button" onClick={onRequestClose} className="btn-close">
          </button>
          <button type="submit" className="btn btn-success">
            Editar pedido
          </button>
        </div>
      </form>
    </Modal>
  );
};

export default Modal2;