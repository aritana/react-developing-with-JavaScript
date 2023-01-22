import { createContext, useContext, useEffect, useState } from "react";

/*Criação contexto do carrinho*/
export const CarrinhoContext = createContext();
CarrinhoContext.displayName = "Carrinho";

export const CarrinhoProvider = ({ children }) => {
  const [carrinho, setCarrinho] = useState([]);
  const [quantidadeProdutos, setQUantidadeProdutos] = useState(0); //usado no listener
  return (
    <CarrinhoContext.Provider
      value={{
        carrinho,
        setCarrinho,
        quantidadeProdutos,
        setQUantidadeProdutos,
      }}
    >
      {children}
    </CarrinhoContext.Provider>
  );
};

export const useCarrinhoContext = () => {
  const { carrinho, setCarrinho, quantidadeProdutos, setQUantidadeProdutos } =
    useContext(CarrinhoContext);

  function adicionarProduto(novoProduto) {
    const temOProduto = carrinho.some(
      (itemDoCarrinho) => itemDoCarrinho.id === novoProduto.id
    );
    /*primeiro produto*/
    if (!temOProduto) {
      novoProduto.quantidade = 1;
      return setCarrinho((carrinhoAnterior) => [
        ...carrinhoAnterior,
        novoProduto,
      ]);
    }
    /*caso tenha o produto*/
    setCarrinho(mudarQuantidade(novoProduto.id, 1));
  }

  function mudarQuantidade(id, quantidade) {
    return carrinho.map((itemDoCarrinho) => {
      if (itemDoCarrinho.id === id) {
        itemDoCarrinho.quantidade += quantidade;
      }
      return itemDoCarrinho;
    });
  }

  function removerProduto(id) {
    const produto = carrinho.find((itemCarrinho) => itemCarrinho.id === id);
    const ehOUltimo = produto.quantidade === 1; //true se quantidade for 1

    if (ehOUltimo) {
      return setCarrinho((carrinhoAnterior) =>
        carrinhoAnterior.filter((itemCarrinho) => itemCarrinho.id !== id)
      );
    }
    setCarrinho(mudarQuantidade(id, -1));
  }
  //listener, entre colchetes é inserido o objeto a ser escutado
  useEffect(() => {
    const novaQuantidade = carrinho.reduce(
      (contador, produto) => contador + produto.quantidade,
      0
    );
    setQUantidadeProdutos(novaQuantidade);
  }, [carrinho,setQUantidadeProdutos]);

  return {
    carrinho,
    setCarrinho,
    adicionarProduto,
    removerProduto,
    quantidadeProdutos,
    setQUantidadeProdutos
  };
};
