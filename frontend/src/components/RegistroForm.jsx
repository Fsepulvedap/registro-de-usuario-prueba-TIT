import { useState } from "react";

export default function RegistroForm() {
  const [form, setForm] = useState({
    nombre: "",
    correo: "",
    contrasena: "",
  });

  const [error, setError] = useState("");
  const [exito, setExito] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validar = () => {
    if (!form.nombre || !form.correo || !form.contrasena) {
      return "Todos los campos son obligatorios.";
    }
    if (!/\S+@\S+\.\S+/.test(form.correo)) {
      return "Correo no válido.";
    }
    if (form.contrasena.length < 6) {
      return "La contraseña debe tener al menos 6 caracteres.";
    }
    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setExito("");

    const errorValidacion = validar();
    if (errorValidacion) {
      setError(errorValidacion);
      return;
    }

    
    setExito("Formulario válido. (Simulación de envío)");
    setForm({ nombre: "", correo: "", contrasena: "" });

    setTimeout(() => setExito(""), 3000);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Nombre completo:</label><br />
        <input
          type="text"
          name="nombre"
          value={form.nombre}
          onChange={handleChange}
        />
      </div>

      <div>
        <label>Correo electrónico:</label><br />
        <input
          type="email"
          name="correo"
          value={form.correo}
          onChange={handleChange}
        />
      </div>

      <div>
        <label>Contraseña:</label><br />
        <input
          type="password"
          name="contrasena"
          value={form.contrasena}
          onChange={handleChange}
        />
      </div>

      <button type="submit">Registrar</button>

      {error && <p style={{ color: "red" }}>{error}</p>}
      {exito && <p style={{ color: "green" }}>{exito}</p>}
    </form>
  );
}