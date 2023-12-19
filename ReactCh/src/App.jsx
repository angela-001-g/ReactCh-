import Formulario from "./components/Formulario";
import Timer from "./components/Timer";

import "./App.css";

function App() {
  return (
    <>
      <div className="divForm">
        <Formulario />
      </div>
      <div className="divTimer">
        <Timer />
      </div>
    </>
  );
}

export default App;
