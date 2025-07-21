import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import { Home } from "../pages/Home/Home";
import { Login } from "../pages/Login/Login";
import { Cadastro } from "../pages/Cadastro/Cadastro";
import { Edicao } from "../pages/Edicao/Edicao";
import { Layout } from "../components/Layout/Layout";
import { Carrinho } from "../pages/Carrinho/Carrinho";
import { useCallback, useState } from "react";
import { useAuth } from "../contexts/AuthContext";

const PrivateRoutes = ({ children }) => {
  const { logado } = useAuth();
  return logado ? children : <Navigate to="/login" />;
};

const PublicRoutes = ({ children }) => {
  const { logado } = useAuth();
  return !logado ? children : <Navigate to="/" />;
};

export const Router = () => {
  const [search, setSearch] = useState("");

  const onSearch = useCallback((searchValue) => {
    setSearch(searchValue);
  });

  const onClear = useCallback(() => {
    setSearch("");
  });

  return (
    <Routes>
      <Route
        path="/"
        element={<Layout onClear={onClear} onSearch={onSearch} />}
      >
        <Route index element={<Home search={search} />} />
        <Route
          path="/login"
          element={
            <PublicRoutes>
              <Login />
            </PublicRoutes>
          }
        />
        <Route
          path="/cadastro"
          element={
            <PrivateRoutes>
              <Cadastro />
            </PrivateRoutes>
          }
        />
        <Route
          path="/edicao/:id"
          element={
            <PrivateRoutes>
              <Edicao />
            </PrivateRoutes>
          }
        />
        <Route
          path="/carrinho"
          element={
            <PrivateRoutes>
              <Carrinho />
            </PrivateRoutes>
          }
        />
      </Route>
    </Routes>
  );
};
