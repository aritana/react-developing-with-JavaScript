import { useState } from "react";
import Formulario from "./components/Formulario";
import Time from "./components/Time";

function App() {

  const times = [
    {
      nome: 'Programação',
      corPrimaria: '#57C278',
      corSecundaria: '#D9F7E9'
    },
    {
      nome: 'Front-End',
      corPrimaria: '#82CFFA',
      corSecundaria: '#E8F8FF'
    },
    {
      nome: 'Data Science',
      corPrimaria: '#A6D157',
      corSecundaria: '#F0F8E2'
    },
    {
      nome: 'Devops',
      corPrimaria: '#E06B69',
      corSecundaria: '#FDE7E8'
    },
    {
      nome: 'Ux e Design',
      corPrimaria: '#DB6EBF',
      corSecundaria: '#FAE9FS'
    },
    {
      nome: 'Mobile',
      corPrimaria: '#FFBAD5',
      corSecundaria: '#FFF5D9'
    },
    {
      nome: 'Inovacao e Gestao',
      corPrimaria: '#FF8A29',
      corSecundaria: '#FFEEDF'
    }
  ]
  const [colaboradores, setColaboradores] = useState([''])

  const aoNovoColaboradorAdicionado = (colaborador) => {
    setColaboradores([...colaboradores, colaborador])
    console.log(colaborador)
  }

  return (
    <div className="App">
      <header className="App-header">
        <Formulario times={times.map(time => time.nome)} aoColaboradorAdicionado={colaborador => aoNovoColaboradorAdicionado(colaborador)} />

        {times.map(time => <Time    
          key={time.corPrimaria} 
          nome={time.nome}
          corPrimaria={time.corPrimaria}
          corSecundaria={time.corSecundaria}
          colaboradores={colaboradores.filter(colaborador=>colaborador.time === time.nome)}
        />)}
      </header>
    </div>
  );
}
export default App;