import { useState } from "react";

import Tabla from "./components/Tabla";

import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [cedula, setCedula] = useState("");
  const [direccion, setDireccion] = useState("");

  const [registro, setRegistro] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const objectRegistro = {
      name,
      cedula,
      direccion,
    };

    setRegistro([...registro, objectRegistro]);

    setName("");
    setCedula("");
    setDireccion("");
  };

  return (
    <>
      <div className="div1">
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Nombre</label>
          </div>
          <input
            type="text"
            placeholder="nombre"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <div>
            <label htmlFor="cedula">Cedula</label>
          </div>
          <input
            type="number"
            id="cedula"
            value={cedula}
            placeholder="cedula"
            onChange={(e) => setCedula(e.target.value)}
          />

          <div>
            <label htmlFor="direccion">Dirección</label>
          </div>
          <input
            type="text"
            id="direccion"
            value={direccion}
            placeholder="direccion"
            onChange={(e) => setDireccion(e.target.value)}
          />

          <div className="registro">
            <input type="submit" value="Registrarse" />
          </div>
        </form>

        <div>
          <Tabla registro={registro} />
        </div>
      </div>
    </>
  );
}

export default App;
