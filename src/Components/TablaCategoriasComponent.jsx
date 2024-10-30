import React, { useState } from 'react';
import '../TablaCategorias.css'; // Importa el archivo CSS para los estilos
import Modal1 from "./Modal1"; // Ruta corregida si es necesario


function TablaCategorias() {
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
  const [categorias, setCategorias] = useState([
    { id: 1, nombre: 'Categoría A' },
    { id: 2, nombre: 'Categoría B' },
    { id: 3, nombre: 'Categoría C' }
  ]);

  // Función para eliminar una categoría
  const eliminarCategoria = (id) => {
    const nuevasCategorias = categorias.filter(categoria => categoria.id !== id);
    setCategorias(nuevasCategorias);
  };

  // Función para modificar una categoría (simplemente muestra un alert en este ejemplo)
  const modificarCategoria = (id) => {
    alert(`Modificar categoría con ID: ${id}`);
    // Aquí puedes implementar la lógica para modificar la categoría
  };

  return (
    <div style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }} className='contenedor'>
      <h2>Tabla de Categorías</h2>
      <table className="tabla-categorias">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {categorias.map((categoria) => (
            <tr key={categoria.id}>
              <td>{categoria.id}</td>
              <td>{categoria.nombre}</td>
              <td>
                <button onClick={() => modificarCategoria(categoria.id)} className="boton-modificar">Modificar</button>
                <button onClick={() => eliminarCategoria(categoria.id)} className="boton-eliminar">Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <br />
      <button className='btn btn-success' onClick={openModal}>Abrir Modal</button>
      <Modal1 isOpen={modalIsOpen} onRequestClose={closeModal} /> {/* Modal */}
    </div>
  );
}

export default TablaCategorias;
