import React, { useEffect, useState } from "react";
import axios from "axios";

export default function ListaUsuarios() { 
  const [usuarios, setUsuarios] = useState([]);
  const [mensaje, setMensaje] = useState("");

  const cargarUsuarios = async () => {
  try {
    const response = await axios.get("https://cautious-halibut-x5qj45qvp75hvrqw-5000.app.github.dev/api/usuarios");
    setUsuarios(response.data);
    setMensaje("Lista actualizada correctamente.");
    setTimeout(() => setMensaje(""), 3000);
  } catch (error) {
    console.error("Error al cargar usuarios:", error);
    setMensaje("Error al cargar usuarios.");
    setTimeout(() => setMensaje(""), 3000);
  }
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