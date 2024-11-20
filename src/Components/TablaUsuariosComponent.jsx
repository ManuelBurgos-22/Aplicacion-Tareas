import React, { useState } from 'react';
import '../TablaUsuarios.css'; // Importa el archivo CSS
import Modal5 from "./Modal5"; // Ruta corregida si es necesario

function TablaUsuarios() {
  // Estado para controlar si el modal está abierto o cerrado
  const [modalIsOpen, setModalIsOpen] = useState(false);

  // Funciones para abrir y cerrar el modal
  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };
  // Datos iniciales de ejemplo
  const [usuarios, setUsuarios] = useState([
    { id: 1, nombre: 'Juan Perez', correo: 'juanperez@example.com', fecha: '2024-01-01' },
    { id: 2, nombre: 'Maria Lopez', correo: 'marialopez@example.com', fecha: '2024-02-15' },
    { id: 3, nombre: 'Carlos Gomez', correo: 'carlosgomez@example.com', fecha: '2024-03-10' }
  ]);

  // Función para eliminar un usuario
  const eliminarUsuario = (id) => {
    const nuevosUsuarios = usuarios.filter(usuario => usuario.id !== id);
    setUsuarios(nuevosUsuarios);
  };

  // Función para modificar un usuario (simplemente muestra un alert en este ejemplo)
  const modificarUsuario = (id) => {
    alert(`Modificar usuario con ID: ${id}`);
    // Aquí puedes implementar la lógica para modificar el usuario
  };

  return (
    <div style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }} className='contenedor'>
      <h2>Tabla de Usuarios</h2>
      <table className="tabla-usuarios">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Correo</th>
            <th>Fecha Registro</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {usuarios.map((usuario) => (
            <tr key={usuario.id}>
              <td>{usuario.id}</td>
              <td>{usuario.nombre}</td>
              <td>{usuario.correo}</td>
              <td>{usuario.fecha}</td>
              <td>
                <button onClick={() => modificarUsuario(usuario.id)} className="boton-modificar">Modificar</button>
                <button onClick={() => eliminarUsuario(usuario.id)} className="boton-eliminar">Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <br />
      <button className='btn btn-success' onClick={openModal}>Agregar usuario</button>
      <Modal5 isOpen={modalIsOpen} onRequestClose={closeModal} /> {/* Modal */}
    </div>
  );
}

export default TablaUsuarios;
