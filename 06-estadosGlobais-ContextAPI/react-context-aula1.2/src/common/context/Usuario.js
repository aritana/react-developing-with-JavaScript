import React, { createContext, useState } from "react";

export const UsuarioContext = createContext();

/*Nomeacao do contexto*/
UsuarioContext.displayName = "Usuário";

/*Reponsabilidade de ter os states e disponibilizar
o provide para outros lugares */

export const UsuarioProvider = ({ children }) => {
  const [nome, setNome] = useState("");
  const [saldo, setSaldo] = useState(0);
  return (
    <UsuarioContext.Provider value={{ nome, setNome, saldo, setSaldo }}>
      {children}
    </UsuarioContext.Provider>
  );
};
