import React, { useState } from 'react';
import Modal from 'react-modal'; // Asegúrate de tener esta librería instalada
import '../TablaReseñas.css'; // Importa el archivo CSS para los estilos
import Axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../Modal1.css";

// Establecer el elemento raíz para la accesibilidad (generalmente '#root')
Modal.setAppElement('#root');

function TablaReseñas() {
  const [reseñasList, setReseñas] = useState([]);
  const [reseñaSeleccionada, setReseñaSeleccionada] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalModificarIsOpen, setModalModificarIsOpen] = useState(false);


  // Esto sirve para recibir datos
  const getReseñas = () => {
    Axios.get("http://localhost:3000/resenas").then((response) => {
      setReseñas(response.data);
    });
  };
  getReseñas();

  // Esto sirve para eliminar datos
  const eliminarReseña = async (id) => {
    try {
      const response = await Axios.delete(`http://localhost:3000/resenas/${id}`);
      console.log(response.data.message);

      // Actualizar el estado para eliminar la categoría de la lista en el frontend
      setReseñas(reseñasList.filter(reseña => reseña.id !== id));
    } catch (error) {
      console.error('Error al eliminar la categoría:', error);
    }
  };

  // Funciones para abrir y cerrar los modales
  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);

  const openModificarModal = (reseña) => {
    setReseñaSeleccionada(reseña);
    setModalModificarIsOpen(true);
  };

  const closeModificarModal = () => {
    setReseñaSeleccionada(null);
    setModalModificarIsOpen(false);
  };

  // Esto sirve para modificar datos
  const modificarReseña = async (id, inputProducto, inputUsuario, inputCalificacion, inputComentario, inputFecha) => {
    try {
      const response = await Axios.put(`http://localhost:3000/resenas/${id}`, {
        inputProducto,
        inputUsuario,
        inputCalificacion,
        inputComentario,
        inputFecha
      });
      console.log(response.data);

      // Actualizar la lista en el frontend
      setReseñas(reseñasList.map(reseña =>
        reseña.id === id ? { ...reseña, producto: inputProducto, usuario: inputUsuario, calificacion: inputCalificacion, comentario: inputComentario, fecha: inputFecha } : reseña
      ));
      closeModificarModal();
    } catch (error) {
      console.error('Error al modificar el reseña:', error);
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
          <h2>Tabla de Reseñas</h2>
          <table className="table table-striped table-bordered text-center">
            <thead className="table-dark">
              <tr>
                <th scope="col">Id</th>
                <th scope="col">Producto</th>
                <th scope="col">Usuario</th>
                <th scope="col">Calificación</th>
                <th scope="col">Comentario</th>
                <th scope="col">Fecha</th>
                <th scope="col">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {reseñasList.map((val) => (
                <tr key={val.id}>
                  <td>{val.id}</td>
                  <td>{val.producto}</td>
                  <td>{val.usuario}</td>
                  <td>{val.calificacion}</td>
                  <td>{val.comentario}</td>
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
                      onClick={() => eliminarReseña(val.id)}
                    >
                      Eliminar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <button className="btn btn-success" onClick={openModal}>
            Agregar reseña
          </button>
          <CustomModal isOpen={modalIsOpen} onRequestClose={closeModal} /> {/* Modal para agregar */}
        </div>
      </div>
      <ModificarModal
        isOpen={modalModificarIsOpen}
        onRequestClose={closeModificarModal}
        reseña={reseñaSeleccionada}
        onModificar={modificarReseña}
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
      <h2 className="modal-header">Agregar reseña</h2>
      <form className="modal-form" onSubmit={handleSubmit}>
        <label>Reseña:</label>
        <input
          type="text"
          name="nombre"
          id="inputProducto"
          placeholder="Nombre del producto"
          required
        />
        <input
          type="text"
          name="usuario"
          id="inputUsuario"
          placeholder="Nombre del usuario"
          required
        />
        <input
          type="number"
          name="calificacion"
          id="inputCalificacion"
          placeholder="Calificación"
          required
        />
        <input
          type="text"
          name="comentario"
          id="inputComentario"
          placeholder="Comentario"
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
            Agregar reseña
          </button>
        </div>
      </form>
    </Modal>
  );
};

// Modal para modificar
const ModificarModal = ({ isOpen, onRequestClose, reseña, onModificar }) => {
  const [inputProducto, setInputProducto] = useState(reseña?.producto || '');
  const [inputUsuario, setInputUsuario] = useState(reseña?.usuario || '');
  const [inputCalificacion, setInputCalificacion] = useState(reseña?.calificacion || '');
  const [inputComentario, setInputComentario] = useState(reseña?.comentario || '');
  const [inputFecha, setInputFecha] = useState(reseña?.fecha || '');

  // Sincroniza los estados con los valores del reseña cuando cambia
  React.useEffect(() => {
    setInputProducto(reseña?.producto || '');
    setInputUsuario(reseña?.usuario || '');
    setInputCalificacion(reseña?.calificacion || '');
    setInputComentario(reseña?.comentario || '');
    setInputFecha(reseña?.fecha || '');
  }, [reseña]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Pasa los valores correctos al método onModificar
    onModificar(reseña.id, inputProducto, inputUsuario, inputCalificacion, inputComentario, inputFecha);
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
      <h2>Modificar Reseña</h2> {/* Modificado aquí el título */}
      <form className="modal-form" onSubmit={handleSubmit}>
        <label>Producto:</label>
        <input
          type="text"
          value={inputProducto}
          onChange={(e) => setInputProducto(e.target.value)}
          required
        />

        <label>Usuario:</label>
        <input
          type="text"
          value={inputUsuario}
          onChange={(e) => setInputUsuario(e.target.value)}
          required
        />

        <label>Calificación:</label>
        <input
          type="number"
          value={inputCalificacion}
          onChange={(e) => setInputCalificacion(e.target.value)}
          required
        />

        <label>Comentario:</label>
        <input
          type="text"
          value={inputComentario}
          onChange={(e) => setInputComentario(e.target.value)}
          required
        />

        <label>Fecha:</label>
        <input
          type="date"
          value={inputFecha}
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
  const inputProducto = document.getElementById('inputProducto').value;
  const inputUsuario = document.getElementById('inputUsuario').value;
  const inputCalificacion = document.getElementById('inputCalificacion').value;
  const inputComentario = document.getElementById('inputComentario').value;
  const inputFecha = document.getElementById('inputFecha').value;

  console.log(inputProducto);
  console.log(inputUsuario);
  console.log(inputCalificacion);
  console.log(inputComentario);
  console.log(inputFecha);

  try {
    const response = await fetch('http://localhost:3000/resenas', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ inputProducto, inputUsuario, inputCalificacion, inputComentario, inputFecha }),
    });
    const data = await response.json();
    console.log(data.message);
    onRequestClose();
  } catch (error) {
    console.error('Error:', error);
  }
};

export default TablaReseñas;
