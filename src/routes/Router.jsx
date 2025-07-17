import { BrowserRouter, Route, Routes } from "react-router";
import { Home } from "../pages/Home/Home";
import { Login } from "../pages/Login/Login";
import { Cadastro } from "../pages/Cadastro/Cadastro";
import { Edicao } from "../pages/Edicao/Edicao";
import { Layout } from "../components/Layout/Layout";
import { Carrinho } from "../pages/Carrinho/Carrinho";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/edicao/:id" element={<Edicao />} />
          <Route path="/carrinho" element={<Carrinho />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
