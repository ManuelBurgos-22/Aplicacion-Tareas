import React, { useState } from 'react';
import '../TablaPedidos.css'; // Importa el archivo CSS para los estilos

function TablaPedidos() {
  // Datos de ejemplo
  const [pedidos, setPedidos] = useState([
    { id: 1, nombre: 'Cliente A', pedidos: 3, total: '$30' },
    { id: 2, nombre: 'Cliente B', pedidos: 5, total: '$50' },
    { id: 3, nombre: 'Cliente C', pedidos: 2, total: '$20' },
  ]);

  // Función para eliminar un pedido
  const eliminarPedido = (id) => {
    const nuevosPedidos = pedidos.filter((pedido) => pedido.id !== id);
    setPedidos(nuevosPedidos);
  };

  // Función para modificar un pedido (simplemente muestra un alert en este ejemplo)
  const modificarPedido = (id) => {
    alert(`Modificar pedido con ID: ${id}`);
    // Aquí puedes implementar la lógica para modificar el pedido
  };

  return (
    <div style={{  width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection:'column' }} className='contenedor'>
      <h2>Tabla de Pedidos</h2>
      <table className="tabla-pedidos">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Pedidos</th>
            <th>Total</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {pedidos.map((pedido) => (
            <tr key={pedido.id}>
              <td>{pedido.id}</td>
              <td>{pedido.nombre}</td>
              <td>{pedido.pedidos}</td>
              <td>{pedido.total}</td>
              <td>
                <button
                  onClick={() => modificarPedido(pedido.id)}
                  className="boton-modificar"
                >
                  Modificar
                </button>
                <button
                  onClick={() => eliminarPedido(pedido.id)}
                  className="boton-eliminar"
                >
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TablaPedidos;
