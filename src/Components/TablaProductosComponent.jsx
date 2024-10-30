import React, { useState } from 'react';
import '../TablaProductos.css'; // Importa el archivo CSS para los estilos
import Modal3 from "./Modal3"; // Ruta corregida si es necesario

function TablaProductos() {
  // Estado para controlar si el modal está abierto o cerrado
  const [modalIsOpen, setModalIsOpen] = useState(false);

  // Funciones para abrir y cerrar el modal
  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  // Datos de ejemplo
  const [productos, setProductos] = useState([
    { id: 1, nombre: 'Producto 1', descripcion: 'Descripción del producto 1', precio: 100, categoria: 'Categoría A' },
    { id: 2, nombre: 'Producto 2', descripcion: 'Descripción del producto 2', precio: 150, categoria: 'Categoría B' },
    { id: 3, nombre: 'Producto 3', descripcion: 'Descripción del producto 3', precio: 200, categoria: 'Categoría A' }
  ]);

  // Función para eliminar un producto
  const eliminarProducto = (id) => {
    const nuevosProductos = productos.filter(producto => producto.id !== id);
    setProductos(nuevosProductos);
  };

  // Función para modificar un producto (simplemente muestra un alert en este ejemplo)
  const modificarProducto = (id) => {
    alert(`Modificar producto con ID: ${id}`);
    // Aquí puedes implementar la lógica para modificar el producto
  };

  return (
    <div style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }} className='contenedor'>
      <h2>Tabla de Productos</h2>
      <table className="tabla-productos">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Descripción</th>
            <th>Precio</th>
            <th>Categoría</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {productos.map((producto) => (
            <tr key={producto.id}>
              <td>{producto.id}</td>
              <td>{producto.nombre}</td>
              <td>{producto.descripcion}</td>
              <td>${producto.precio}</td>
              <td>{producto.categoria}</td>
              <td>
                <button onClick={() => modificarProducto(producto.id)} className="boton-modificar">Modificar</button>
                <button onClick={() => eliminarProducto(producto.id)} className="boton-eliminar">Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <br />
      <button className='btn btn-success' onClick={openModal}>Abrir Modal</button>
      <Modal3 isOpen={modalIsOpen} onRequestClose={closeModal} /> {/* Modal */}
    </div>
  );
}

export default TablaProductos;
