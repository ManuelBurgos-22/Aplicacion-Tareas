import React, { useState } from 'react';
import '../TablaReseñas.css'; // Importa el archivo CSS para los estilos
import Modal4 from "./Modal4"; // Ruta corregida si es necesario

function TablaReseñas() {
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
  const [reseñas, setReseñas] = useState([
    {
      id: 1,
      producto: 'Producto A',
      usuario: 'Usuario 1',
      calificacion: 4,
      comentarios: 'Buen producto.',
      fecha: '2024-10-10',
    },
    {
      id: 2,
      producto: 'Producto B',
      usuario: 'Usuario 2',
      calificacion: 5,
      comentarios: 'Excelente calidad.',
      fecha: '2024-10-12',
    },
    {
      id: 3,
      producto: 'Producto C',
      usuario: 'Usuario 3',
      calificacion: 3,
      comentarios: 'Aceptable.',
      fecha: '2024-10-14',
    },
  ]);

  // Función para eliminar una reseña
  const eliminarReseña = (id) => {
    const nuevasReseñas = reseñas.filter((reseña) => reseña.id !== id);
    setReseñas(nuevasReseñas);
  };

  // Función para modificar una reseña (simplemente muestra un alert en este ejemplo)
  const modificarReseña = (id) => {
    alert(`Modificar reseña con ID: ${id}`);
    // Aquí puedes implementar la lógica para modificar la reseña
  };

  return (
    <div style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }} className='contenedor'>
      <h2>Tabla de Reseñas</h2>
      <table className="tabla-reseñas">
        <thead>
          <tr>
            <th>ID</th>
            <th>Producto</th>
            <th>Usuario</th>
            <th>Calificación</th>
            <th>Comentarios</th>
            <th>Fecha de reseña</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {reseñas.map((reseña) => (
            <tr key={reseña.id}>
              <td>{reseña.id}</td>
              <td>{reseña.producto}</td>
              <td>{reseña.usuario}</td>
              <td>{reseña.calificacion}</td>
              <td>{reseña.comentarios}</td>
              <td>{reseña.fecha}</td>
              <td>
                <button
                  onClick={() => modificarReseña(reseña.id)}
                  className="boton-modificar"
                >
                  Modificar
                </button>
                <button
                  onClick={() => eliminarReseña(reseña.id)}
                  className="boton-eliminar"
                >
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <br />
      <button className='btn btn-success' onClick={openModal}>Agregar reseña</button>
      <Modal4 isOpen={modalIsOpen} onRequestClose={closeModal} /> {/* Modal */}
    </div>
  );
}

export default TablaReseñas;
