import { useState } from "react";
import Tabla from "./Tabla";

function Formulario() {
  const [name, setName] = useState("");
  const [identification, setIdentification] = useState("");
  const [address, setAddress] = useState("");

  const [register, setRegister] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const objectRegistro = {
      name,
      identification,
      address,
    };

    setRegister([...register, objectRegistro]);

    setName("");
    setIdentification("");
    setAddress("");
  };

  return (
    <>
      <div className="div1">
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name</label>
          </div>
          <input
            type="text"
            placeholder="name"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <div>
            <label htmlFor="identification">Identification</label>
          </div>
          <input
            type="number"
            id="identification"
            value={identification}
            placeholder="identification"
            onChange={(e) => setIdentification(e.target.value)}
          />

          <div>
            <label htmlFor="address">Adress</label>
          </div>
          <input
            type="text"
            id="address"
            value={address}
            placeholder="address"
            onChange={(e) => setAddress(e.target.value)}
          />

          <div className="register">
            <input type="submit" value="Register" />
          </div>
        </form>

        <div>
          <Tabla register={register} />
        </div>
      </div>
    </>
  );
}

export default Formulario;
