import React, { useState } from 'react';
import Modal from 'react-modal'; // Asegúrate de tener esta librería instalada
import '../TablaCategorias.css'; // Importa el archivo CSS para los estilos
import Axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../Modal1.css";

// Establecer el elemento raíz para la accesibilidad (generalmente '#root')
Modal.setAppElement('#root');

function TablaCategorias() {
  const [categoriasList, setCategorias] = useState([]);
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalModificarIsOpen, setModalModificarIsOpen] = useState(false);


  // Esto sirve para recibir datos
  const getCategorias = () => {
    Axios.get("http://localhost:3000/categorias").then((response) => {
      setCategorias(response.data);
    });
  };
  getCategorias();

  // Esto sirve para eliminar datos
  const eliminarCategoria = async (id) => {
    try {
      const response = await Axios.delete(`http://localhost:3000/categorias/${id}`);
      console.log(response.data.message);

      // Actualizar el estado para eliminar la categoría de la lista en el frontend
      setCategorias(categoriasList.filter(categoria => categoria.id !== id));
    } catch (error) {
      console.error('Error al eliminar la categoría:', error);
    }
  };

  // Funciones para abrir y cerrar los modales
  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);

  const openModificarModal = (categoria) => {
    setCategoriaSeleccionada(categoria);
    setModalModificarIsOpen(true);
  };

  const closeModificarModal = () => {
    setCategoriaSeleccionada(null);
    setModalModificarIsOpen(false);
  };

  // Esto sirve para modificar datos
  const modificarCategoria = async (id, nombre) => {
    try {
      const response = await Axios.put(`http://localhost:3000/categorias/${id}`, {
        inputNombre: nombre,
      });
      console.log(response.data);

      // Actualizar la lista en el frontend
      setCategorias(categoriasList.map(cat => (cat.id === id ? { ...cat, nombre } : cat)));
      closeModificarModal();
    } catch (error) {
      console.error('Error al modificar la categoría:', error);
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
          <h2>Tabla de Categorías</h2>
          <table className="table table-striped table-bordered text-center">
            <thead className="table-dark">
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Nombre</th>
                <th scope="col">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {categoriasList.map((val) => (
                <tr key={val.id}>
                  <td>{val.id}</td>
                  <td>{val.nombre}</td>
                  <td>
                    <button
                      className="btn btn-success me-2"
                      onClick={() => openModificarModal(val)}
                    >
                      Modificar
                    </button>
                    <button
                      className="btn btn-danger"
                      onClick={() => eliminarCategoria(val.id)}
                    >
                      Eliminar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <button className="btn btn-success" onClick={openModal}>
            Agregar categoría
          </button>
          <CustomModal isOpen={modalIsOpen} onRequestClose={closeModal} /> {/* Modal para agregar */}
        </div>
      </div>
      <ModificarModal
        isOpen={modalModificarIsOpen}
        onRequestClose={closeModificarModal}
        categoria={categoriaSeleccionada}
        onModificar={modificarCategoria}
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
      <h2 className="modal-header">Agregar categoría</h2>
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
          <button
            type="button"
            onClick={onRequestClose}
            className="btn btn-danger button-equal"
          >
            Cerrar
          </button>
          <button type="submit" className="btn btn-success button-equal">
            Agregar categoría
          </button>
        </div>
      </form>
    </Modal>
  );
};

// Modal para modificar
const ModificarModal = ({ isOpen, onRequestClose, categoria, onModificar }) => {
  const [nombre, setNombre] = useState(categoria?.nombre || '');

  // Sincroniza el estado del nombre con la categoría seleccionada
  React.useEffect(() => {
    setNombre(categoria?.nombre || '');
  }, [categoria]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onModificar(categoria.id, nombre);
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
      <h2>Modificar Categoría</h2>
      <form className="modal-form" onSubmit={handleSubmit}>
        <label>Categoría:</label>
        <input
          type="text"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
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
  console.log(inputNombre);

  try {
    const response = await fetch('http://localhost:3000/categorias', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ inputNombre }),
    });
    const data = await response.json();
    console.log(data.message);
    onRequestClose();
  } catch (error) {
    console.error('Error:', error);
  }
};

export default TablaCategorias;
