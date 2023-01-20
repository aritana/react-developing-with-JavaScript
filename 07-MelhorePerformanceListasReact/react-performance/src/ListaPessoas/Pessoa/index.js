import React, { memo } from "react";

function Pessoa({ nome, deletar, id }) {
  console.log(`pessoa ${nome} renderizado`);
  return (
    <li className="box mb-3">
      {nome}
      <button className="button is-warning ml-2" onClick={() => deletar(id)}>
        Me delete!
      </button>
    </li>
  );
}

export default memo(Pessoa);
