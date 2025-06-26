import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const AgregarContacto = () => {
  const navegar = useNavigate();
  const [datos, setDatos] = useState({
    nombre_completo: "",
    correo: "",
    telefono: "",
    direccion: ""
  });

  const manejarCambio = (e) =>
    setDatos({ ...datos, [e.target.name]: e.target.value });

  const enviarFormulario = async (e) => {
    e.preventDefault();
    const nuevoContacto = {
      full_name: datos.nombre_completo,
      email: datos.correo,
      phone: datos.telefono,
      address: datos.direccion,
      agenda_slug: "ismain-agenda"
    };

    try {
      const resp = await fetch("https://playground.4geeks.com/apis/fake/contact/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(nuevoContacto)
      });

      if (resp.ok) {
        alert("Contacto creado");
        navegar("/");
      } else {
        alert("Error al crear el contacto");
      }
    } catch (error) {
      alert("Error de conexión");
    }
  };

  return (
    <div className="container mt-5">
      <h2>Agregar nuevo contacto</h2>
      <form onSubmit={enviarFormulario}>
        {/* campo de formulario */}
      </form>
    </div>
  );
};
