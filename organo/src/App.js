import { useState } from "react";
import Formulario from "./components/Formulario";

function App() {

  const [colaboradores, setColaboradores] = useState([''])

  const aoNovoColaboradorAdicionado = (colaborador) => {
    console.log(colaborador)
  }

  return (
    <div className="App">
      <header className="App-header">
        <Formulario aoColaboradorAdicionado={colaborador => aoNovoColaboradorAdicionado(colaborador)}
        />
      </header>
    </div>
  );
}
export default App;