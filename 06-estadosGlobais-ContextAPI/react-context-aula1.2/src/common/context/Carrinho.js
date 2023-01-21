import { createContext, useState } from "react";

/*Criação contexto do carrinho*/
export const CarrinhoContext = createContext();
CarrinhoContext.displayName = "Carrinho";

export const CarrinhoProvider = ({ children }) => {
    const[carrinho, setCarrinho] =  useState([]);
  return <CarrinhoContext.Provider value={{carrinho,setCarrinho}}>{children}</CarrinhoContext.Provider>;
};
