import { useCallback, useState } from "react";
import Pessoa from "./Pessoa";

export default function ListaPessoas() {
  const [pessoas, setPessoas] = useState(["Maria", "João"]);


  /*grava na memoria funcoes, funcao, [], quando deve ser alterada.*/
  const deletarPessoa = useCallback((id) => {
    setPessoas((listaAnterior) =>
      listaAnterior.filter((pessoa, indexAnterior) => indexAnterior !== id)
    );
  }, []);

  return (
    <div className="has-text-centered">
      <ul>
        {pessoas.map((pessoa, index) => (
          <Pessoa   nome={pessoa} id={index} deletar={deletarPessoa} />
        ))}
      </ul>
      <button
        className="button is-primary is-outlined"
        onClick={() =>
          setPessoas((listaAnterior) => [...listaAnterior, "José"])
        }
      >
        Adicionar Pessoa
      </button>
    </div>
  );
}
