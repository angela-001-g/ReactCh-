import { useState } from "react";
import Tabla from "./Tabla";
import Alert from "./Alert";
import "../styles/form.css";

function Formulario() {
  const [name, setName] = useState("");
  const [identification, setIdentification] = useState("");
  const [address, setAddress] = useState("");

  const [register, setRegister] = useState([]);
  const [alert, setAlert] = useState(false);
  const [msg, setMsg] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    const objectRegistro = {
      name,
      identification,
      address,
    };

    if ([name, identification, address].includes("")) {
      setAlert(true);
      setMsg({
        msg: "All fields are required",
        type: "error",
      });
      return;
    }

    if (name.length < 3) {
      setAlert(true);
      setMsg({
        msg: "Min 3 chars to name",
        type: "error",
      });
      return;
    }

    if (identification.length > 12) {
      setAlert(true);
      setMsg({
        msg: "Must be less than 12 numbers",
        type: "error",
      });
      return;
    }

    setRegister([...register, objectRegistro]);

    setName("");
    setIdentification("");
    setAddress("");
    setAlert(false);
  };

  return (
    <>
      <div></div>
      <div className="div1">
        <form onSubmit={handleSubmit} className="form">
          {alert && <Alert msg={msg} />}

          <div className="lab">
            <label htmlFor="name">Name:</label>
          </div>
          <input
            type="text"
            placeholder="name"
            id="name"
            maxLength="25"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <div className="lab">
            <label htmlFor="identification">Identification:</label>
          </div>
          <input
            type="number"
            id="identification"
            value={identification}
            placeholder="identification"
            onChange={(e) => setIdentification(e.target.value)}
          />

          <div className="lab">
            <label htmlFor="address">Adress:</label>
          </div>
          <input
            type="text"
            id="address"
            maxLength="20"
            value={address}
            placeholder="address"
            onChange={(e) => setAddress(e.target.value)}
          />

          <div className="register">
            <input type="submit" value="Register" className="inpSubmit" />
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
