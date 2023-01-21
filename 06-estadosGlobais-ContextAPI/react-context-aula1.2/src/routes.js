import Carrinho from "pages/Carrinho";
import Feira from "pages/Feira";
import Login from "pages/Login";
import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { UsuarioProvider } from "common/context/Usuario";
import { CarrinhoProvider } from "common/context/Carrinho";

export default function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <UsuarioProvider>
          <Route exact path="/">
            <Login />
          </Route>
          {/* prover contexto carrinho para rota de feira */}
          <CarrinhoProvider>
            <Route path="/feira">
              <Feira />
            </Route>
          </CarrinhoProvider>
        </UsuarioProvider>
        <Route path="/carrinho">
          <Carrinho />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
