import React, { useEffect, useState } from "react";

export default function ListaUsuarios() { 
  const [usuarios, setUsuarios] = useState([]);
  const [mensaje, setMensaje] = useState("");

  const cargarUsuarios = () => {    
    const datosSimulados = [
      { nombre: "Ana Pérez", correo: "ana@example.com" },
      { nombre: "Juan Rodríguez", correo: "juan@example.com" },
      { nombre: "Laura Gómez", correo: "laura@example.com" },
    ];

    setUsuarios(datosSimulados);
    setMensaje("Lista actualizada correctamente.");

    setTimeout(() => setMensaje(""), 3000);
  };

  useEffect(() => {
    cargarUsuarios(); 
  }, []);

  return (
    <div>
      <h2>Usuarios Registrados</h2>
      <button onClick={cargarUsuarios}>Actualizar Lista</button>
      {mensaje && <p style={{ color: "green" }}>{mensaje}</p>}
      {usuarios.length === 0 ? (
        <p>No hay usuarios registrados.</p>
      ) : (
        <table border="1" cellPadding="8" style={{ marginTop: "10px" }}>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Correo</th>
            </tr>
          </thead>
          <tbody>
            {usuarios.map((usuario, index) => (
              <tr key={index}>
                <td>{usuario.nombre}</td>
                <td>{usuario.correo}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}