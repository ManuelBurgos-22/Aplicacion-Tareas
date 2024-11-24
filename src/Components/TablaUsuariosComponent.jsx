import React, { useState } from 'react';
import Modal from 'react-modal'; // Asegúrate de tener esta librería instalada
import '../TablaUsuarios.css'; // Importa el archivo CSS para los estilos
import Axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../Modal1.css";

// Establecer el elemento raíz para la accesibilidad (generalmente '#root')
Modal.setAppElement('#root');

function TablaUsuarios() {
  const [usuariosList, setUsuarios] = useState([]);
  const [usuarioSeleccionada, setUsuarioSeleccionada] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalModificarIsOpen, setModalModificarIsOpen] = useState(false);


  // Esto sirve para recibir datos
  const getUsuarios = () => {
    Axios.get("http://localhost:3000/usuarios").then((response) => {
      setUsuarios(response.data);
    });
  };
  getUsuarios();

  // Esto sirve para eliminar datos
  const eliminarUsuario = async (id) => {
    try {
      const response = await Axios.delete(`http://localhost:3000/usuarios/${id}`);
      console.log(response.data.message);

      // Actualizar el estado para eliminar la categoría de la lista en el frontend
      setUsuarios(usuariosList.filter(usuario => usuario.id !== id));
    } catch (error) {
      console.error('Error al eliminar la categoría:', error);
    }
  };

  // Funciones para abrir y cerrar los modales
  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);

  const openModificarModal = (usuario) => {
    setUsuarioSeleccionada(usuario);
    setModalModificarIsOpen(true);
  };

  const closeModificarModal = () => {
    setUsuarioSeleccionada(null);
    setModalModificarIsOpen(false);
  };

  // Esto sirve para modificar datos
  const modificarUsuario = async (id, inputNombre, inputCorreo, inputFecha) => {
    try {
      const response = await Axios.put(`http://localhost:3000/usuarios/${id}`, {
        inputNombre,
        inputCorreo,
        inputFecha
      });
      console.log(response.data);

      // Actualizar la lista en el frontend
      setUsuarios(usuariosList.map(usuario =>
        usuario.id === id ? { ...usuario, nombre: inputNombre, correo: inputCorreo, fecha: inputFecha } : usuario
      ));
      closeModificarModal();
    } catch (error) {
      console.error('Error al modificar el usuario:', error);
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
          <h2>Tabla de Usuarios</h2>
          <table className="table table-striped table-bordered text-center">
            <thead className="table-dark">
              <tr>
                <th scope="col">Id</th>
                <th scope="col">Nombre del usuario</th>
                <th scope="col">Correo</th>
                <th scope="col">Fecha</th>
                <th scope="col">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {usuariosList.map((val) => (
                <tr key={val.id}>
                  <td>{val.id}</td>
                  <td>{val.nombre}</td>
                  <td>{val.correo}</td>
                  <td>{val.fecha}</td>
                  <td>
                    <button
                      className="btn btn-success me-2"
                      onClick={() => openModificarModal(val)}
                    >
                      Modificar
                    </button>
                    <button
                      className="btn btn-danger"
                      onClick={() => eliminarUsuario(val.id)}
                    >
                      Eliminar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <button className="btn btn-success" onClick={openModal}>
            Agregar usuario
          </button>
          <CustomModal isOpen={modalIsOpen} onRequestClose={closeModal} /> {/* Modal para agregar */}
        </div>
      </div>
      <ModificarModal
        isOpen={modalModificarIsOpen}
        onRequestClose={closeModificarModal}
        usuario={usuarioSeleccionada}
        onModificar={modificarUsuario}
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
      <h2 className="modal-header">Agregar usuarios</h2>
      <form className="modal-form" onSubmit={handleSubmit}>
        <label>Usuarios:</label>
        <input
          type="text"
          name="nombre"
          id="inputNombre"
          placeholder="Nombre del usuario"
          required
        />
        <input
          type="email"
          name="email"
          id="inputCorreo"
          placeholder="Correo"
          required
        />
        <input
          type="date"
          name="fecha"
          id="inputFecha"
          placeholder="Fecha"
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
            Agregar usuario
          </button>
        </div>
      </form>
    </Modal>
  );
};

// Modal para modificar
const ModificarModal = ({ isOpen, onRequestClose, usuario, onModificar }) => {
  const [inputNombre, setInputNombre] = useState(usuario?.nombre || '');
  const [inputCorreo, setInputCorreo] = useState(usuario?.correo || '');
  const [inputFecha, setInputFecha] = useState(usuario?.fecha || '');

  // Sincroniza los estados con los valores del usuario cuando cambia
  React.useEffect(() => {
    setInputNombre(usuario?.nombre || '');
    setInputCorreo(usuario?.correo || '');
    setInputFecha(usuario?.fecha || '');
  }, [usuario]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Pasa los valores correctos al método onModificar
    onModificar(usuario.id, inputNombre, inputCorreo, inputFecha);
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
      <h2>Modificar Usuario</h2> {/* Modificado aquí el título */}
      <form className="modal-form" onSubmit={handleSubmit}>
        <label>Nombre:</label>
        <input
          type="text"
          value={inputNombre}
          onChange={(e) => setInputNombre(e.target.value)}
          required
        />

        <label>Correo:</label>
        <input
          type="email"
          value={inputCorreo}
          onChange={(e) => setInputCorreo(e.target.value)}
          required
        />

        <label>Fecha:</label>
        <input
          type="date"

          onChange={(e) => setInputFecha(e.target.value)}
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
  const inputNombre = document.getElementById('inputNombre').value;
  const inputCorreo = document.getElementById('inputCorreo').value;
  const inputFecha = document.getElementById('inputFecha').value;

  console.log(inputNombre);
  console.log(inputCorreo);
  console.log(inputFecha);

  try {
    const response = await fetch('http://localhost:3000/usuarios', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ inputNombre, inputCorreo, inputFecha }),
    });
    const data = await response.json();
    console.log(data.message);
    onRequestClose();
  } catch (error) {
    console.error('Error:', error);
  }
};

export default TablaUsuarios;
