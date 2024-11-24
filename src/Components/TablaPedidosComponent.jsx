import React, { useState } from 'react';
import Modal from 'react-modal'; // Asegúrate de tener esta librería instalada
import '../TablaPedidos.css'; // Importa el archivo CSS para los estilos
import Axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../Modal1.css";

// Establecer el elemento raíz para la accesibilidad (generalmente '#root')
Modal.setAppElement('#root');

function TablaPedidos() {
  const [pedidosList, setPedidos] = useState([]);
  const [pedidoSeleccionada, setPedidoSeleccionada] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalModificarIsOpen, setModalModificarIsOpen] = useState(false);


  // Esto sirve para recibir datos
  const getPedidos = () => {
    Axios.get("http://localhost:3000/pedidos").then((response) => {
      setPedidos(response.data);
    });
  };
  getPedidos();

  // Esto sirve para eliminar datos
  const eliminarPedido = async (id) => {
    try {
      const response = await Axios.delete(`http://localhost:3000/pedidos/${id}`);
      console.log(response.data.message);

      // Actualizar el estado para eliminar la categoría de la lista en el frontend
      setPedidos(pedidosList.filter(pedido => pedido.id !== id));
    } catch (error) {
      console.error('Error al eliminar la categoría:', error);
    }
  };

  // Funciones para abrir y cerrar los modales
  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);

  const openModificarModal = (pedido) => {
    setPedidoSeleccionada(pedido);
    setModalModificarIsOpen(true);
  };

  const closeModificarModal = () => {
    setPedidoSeleccionada(null);
    setModalModificarIsOpen(false);
  };

  // Esto sirve para modificar datos
  const modificarPedido = async (id, inputCliente, inputPedidos, inputTotal) => {
    try {
      const response = await Axios.put(`http://localhost:3000/pedidos/${id}`, {
        inputCliente,
        inputPedidos,
        inputTotal,
      });
      console.log(response.data);

      // Actualizar la lista en el frontend
      setPedidos(pedidosList.map(pedido =>
        pedido.id === id ? { ...pedido, nomcliente: inputCliente, numpedidos: inputPedidos, total: inputTotal } : pedido
      ));
      closeModificarModal();
    } catch (error) {
      console.error('Error al modificar el pedido:', error);
    }
  };


  // Listado de la tabla
  return (
    <div
      style={{
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
      }}
      className="contenedor"
    >
      <div
        style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
        }}
        className="contenedor"
      >
        <div style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }} className='contenedor'>
          <h2>Tabla de Pedidos</h2>
          <table className="table table-striped table-bordered text-center">
            <thead className="table-dark">
              <tr>
                <th scope="col">Id</th>
                <th scope="col">Nombre de cliente</th>
                <th scope="col">Número de pedidos</th>
                <th scope="col">Total</th>
                <th scope="col">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {pedidosList.map((val) => (
                <tr key={val.id}>
                  <td>{val.id}</td>
                  <td>{val.nomcliente}</td>
                  <td>{val.numpedidos}</td>
                  <td>{val.total}</td>
                  <td>
                    <button
                      className="btn btn-success me-2"
                      onClick={() => openModificarModal(val)}
                    >
                      Modificar
                    </button>
                    <button
                      className="btn btn-danger"
                      onClick={() => eliminarPedido(val.id)}
                    >
                      Eliminar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <button className="btn btn-success" onClick={openModal}>
            Agregar pedido
          </button>
          <CustomModal isOpen={modalIsOpen} onRequestClose={closeModal} /> {/* Modal para agregar */}
        </div>
      </div>
      <ModificarModal
        isOpen={modalModificarIsOpen}
        onRequestClose={closeModificarModal}
        pedido={pedidoSeleccionada}
        onModificar={modificarPedido}
      /> {/* Modal para modificar */}
    </div>
  );
}

// Modal para agregar
const CustomModal = ({ isOpen, onRequestClose }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    sendInfo(onRequestClose);
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      style={{
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
          width: '400px',
        },
      }}
    >
      <h2 className="modal-header">Agregar pedidos</h2>
      <form className="modal-form" onSubmit={handleSubmit}>
        <label>Pedidos:</label>
        <input
          type="text"
          name="nombre"
          id="inputCliente"
          placeholder="Nombre del cliente"
          required
        />
        <input
          type="number"
          name="pedidos"
          id="inputPedidos"
          placeholder="Número de pedidos"
          required
        />
        <input
          type="number"
          name="total"
          id="inputTotal"
          placeholder="Total"
          required
        />
        <div className="modal-buttons">
          <button
            type="button"
            onClick={onRequestClose}
            className="btn btn-danger button-equal"
          >
            Cerrar
          </button>
          <button type="submit" className="btn btn-success button-equal">
            Agregar pedido
          </button>
        </div>
      </form>
    </Modal>
  );
};

// Modal para modificar
const ModificarModal = ({ isOpen, onRequestClose, pedido, onModificar }) => {
  const [inputCliente, setInputCliente] = useState(pedido?.nomcliente || '');
  const [inputPedidos, setInputPedidos] = useState(pedido?.numpedidos || '');
  const [inputTotal, setInputTotal] = useState(pedido?.total || '');

  // Sincroniza los estados con los valores del pedido cuando cambia
  React.useEffect(() => {
    setInputCliente(pedido?.nomcliente || '');
    setInputPedidos(pedido?.numpedidos || '');
    setInputTotal(pedido?.total || '');
  }, [pedido]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Pasa los valores correctos al método onModificar
    onModificar(pedido.id, inputCliente, inputPedidos, inputTotal);
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      style={{
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
          width: '400px',
        },
      }}
    >
      <h2>Modificar Pedido</h2> {/* Modificado aquí el título */}
      <form className="modal-form" onSubmit={handleSubmit}>
        <label>Cliente:</label>
        <input
          type="text"
          value={inputCliente}
          onChange={(e) => setInputCliente(e.target.value)}
          required
        />
        
        <label>Número de Pedidos:</label>
        <input
          type="number"
          value={inputPedidos}
          onChange={(e) => setInputPedidos(e.target.value)}
          required
        />
        
        <label>Total:</label>
        <input
          type="number"
          value={inputTotal}
          onChange={(e) => setInputTotal(e.target.value)}
          required
        />

        <div className="modal-buttons">
          <button type="button" onClick={onRequestClose} className="btn btn-danger">
            Cerrar
          </button>
          <button type="submit" className="btn btn-success">
            Guardar
          </button>
        </div>
      </form>
    </Modal>
  );
};


// Esto sirve para enviar datos
const sendInfo = async (onRequestClose) => {
  const inputCliente = document.getElementById('inputCliente').value;
  const inputPedidos = document.getElementById('inputPedidos').value;
  const inputTotal = document.getElementById('inputTotal').value;

  console.log(inputCliente);
  console.log(inputPedidos);
  console.log(inputTotal);

  try {
    const response = await fetch('http://localhost:3000/pedidos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ inputCliente, inputPedidos, inputTotal }),
    });
    const data = await response.json();
    console.log(data.message);
    onRequestClose();
  } catch (error) {
    console.error('Error:', error);
  }
};

export default TablaPedidos;
