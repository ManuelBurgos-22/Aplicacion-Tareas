import React, { useState } from 'react';
import Modal from 'react-modal'; // Asegúrate de tener esta librería instalada
import '../TablaProductos.css'; // Importa el archivo CSS para los estilos
import Axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../Modal1.css";

// Establecer el elemento raíz para la accesibilidad (generalmente '#root')
Modal.setAppElement('#root');

function TablaProductos() {
  const [productosList, setProductos] = useState([]);
  const [productoSeleccionada, setProductoSeleccionada] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalModificarIsOpen, setModalModificarIsOpen] = useState(false);


  // Esto sirve para recibir datos
  const getProductos = () => {
    Axios.get("http://localhost:3000/productos").then((response) => {
      setProductos(response.data);
    });
  };
  getProductos();

  // Esto sirve para eliminar datos
  const eliminarProducto = async (id) => {
    try {
      const response = await Axios.delete(`http://localhost:3000/productos/${id}`);
      console.log(response.data.message);

      // Actualizar el estado para eliminar la categoría de la lista en el frontend
      setProductos(productosList.filter(producto => producto.id !== id));
    } catch (error) {
      console.error('Error al eliminar la categoría:', error);
    }
  };

  // Funciones para abrir y cerrar los modales
  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);

  const openModificarModal = (producto) => {
    setProductoSeleccionada(producto);
    setModalModificarIsOpen(true);
  };

  const closeModificarModal = () => {
    setProductoSeleccionada(null);
    setModalModificarIsOpen(false);
  };

  // Esto sirve para modificar datos
  const modificarProducto = async (id, inputNombre, inputDescripcion, inputPrecio, inputCategoria) => {
    try {
      const response = await Axios.put(`http://localhost:3000/productos/${id}`, {
        inputNombre,
        inputDescripcion,
        inputPrecio,
        inputCategoria
      });
      console.log(response.data);

      // Actualizar la lista en el frontend
      setProductos(productosList.map(producto =>
        producto.id === id ? { ...producto, nombre: inputNombre, descripcion: inputDescripcion, precio: inputPrecio, categoria: inputCategoria } : producto
      ));
      closeModificarModal();
    } catch (error) {
      console.error('Error al modificar el producto:', error);
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
          <h2>Tabla de Productos</h2>
          <table className="table table-striped table-bordered text-center">
            <thead className="table-dark">
              <tr>
                <th scope="col">Id</th>
                <th scope="col">Nombre del producto</th>
                <th scope="col">Descripción</th>
                <th scope="col">Precio</th>
                <th scope="col">Categoría</th>
                <th scope="col">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {productosList.map((val) => (
                <tr key={val.id}>
                  <td>{val.id}</td>
                  <td>{val.nombre}</td>
                  <td>{val.descripcion}</td>
                  <td>{val.precio}</td>
                  <td>{val.categoria}</td>
                  <td>
                    <button
                      className="btn btn-success me-2"
                      onClick={() => openModificarModal(val)}
                    >
                      Modificar
                    </button>
                    <button
                      className="btn btn-danger"
                      onClick={() => eliminarProducto(val.id)}
                    >
                      Eliminar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <button className="btn btn-success" onClick={openModal}>
            Agregar producto
          </button>
          <CustomModal isOpen={modalIsOpen} onRequestClose={closeModal} /> {/* Modal para agregar */}
        </div>
      </div>
      <ModificarModal
        isOpen={modalModificarIsOpen}
        onRequestClose={closeModificarModal}
        producto={productoSeleccionada}
        onModificar={modificarProducto}
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
      <h2 className="modal-header">Agregar producto</h2>
      <form className="modal-form" onSubmit={handleSubmit}>
        <label>Producto:</label>
        <input
          type="text"
          name="nombre"
          id="inputNombre"
          placeholder="Nombre del producto"
          required
        />
        <input
          type="text"
          name="descripcion"
          id="inputDescripcion"
          placeholder="Descripción"
          required
        />
        <input
          type="number"
          name="precio"
          id="inputPrecio"
          placeholder="Precio"
          required
        />
        <input
          type="text"
          name="categoria"
          id="inputCategoria"
          placeholder="Categoría"
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
            Agregar producto
          </button>
        </div>
      </form>
    </Modal>
  );
};

// Modal para modificar
const ModificarModal = ({ isOpen, onRequestClose, producto, onModificar }) => {
  const [inputNombre, setInputNombre] = useState(producto?.nombre || '');
  const [inputDescripcion, setInputDescripcion] = useState(producto?.descripcion || '');
  const [inputPrecio, setInputPrecio] = useState(producto?.precio || '');
  const [inputCategoria, setInputCategoria] = useState(producto?.categoria || '');

  // Sincroniza los estados con los valores del producto cuando cambia
  React.useEffect(() => {
    setInputNombre(producto?.nombre || '');
    setInputDescripcion(producto?.descripcion || '');
    setInputPrecio(producto?.precio || '');
    setInputCategoria(producto?.categoria || '');
  }, [producto]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Pasa los valores correctos al método onModificar
    onModificar(producto.id, inputNombre, inputDescripcion, inputPrecio, inputCategoria);
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
      <h2>Modificar Producto</h2> {/* Modificado aquí el título */}
      <form className="modal-form" onSubmit={handleSubmit}>
        <label>Producto:</label>
        <input
          type="text"
          value={inputNombre}
          onChange={(e) => setInputNombre(e.target.value)}
          required
        />

        <label>descripción:</label>
        <input
          type="text"
          value={inputDescripcion}
          onChange={(e) => setInputDescripcion(e.target.value)}
          required
        />

        <label>Precio:</label>
        <input
          type="number"
          value={inputPrecio}
          onChange={(e) => setInputPrecio(e.target.value)}
          required
        />

        <label>Cateroria:</label>
        <input
          type="text"
          value={inputCategoria}
          onChange={(e) => setInputCategoria(e.target.value)}
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
  const inputDescripcion = document.getElementById('inputDescripcion').value;
  const inputPrecio = document.getElementById('inputPrecio').value;
  const inputCategoria = document.getElementById('inputCategoria').value;

  console.log(inputNombre);
  console.log(inputDescripcion);
  console.log(inputPrecio);
  console.log(inputCategoria);

  try {
    const response = await fetch('http://localhost:3000/productos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ inputNombre, inputDescripcion, inputPrecio, inputCategoria }),
    });
    const data = await response.json();
    console.log(data.message);
    onRequestClose();
  } catch (error) {
    console.error('Error:', error);
  }
};

export default TablaProductos;
