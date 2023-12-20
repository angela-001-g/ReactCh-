import Formulario from "./components/Formulario";
import Timer from "./components/Timer";

import "./App.css";

function App() {
  return (
    <>
      <div className="content">
        <div>
          <Formulario />
          <Timer />
        </div>
        <div></div>
      </div>
    </>
  );
}

export default App;
