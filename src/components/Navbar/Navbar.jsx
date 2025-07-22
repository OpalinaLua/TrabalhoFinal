import { House, ShoppingCart } from "lucide-react";
import { NavLink } from "react-router";

export const Navbar = () => {
  return (
    <>
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? "link-ativo" : "")}
      >
        {({ isActive }) =>
          isActive ? (
            <div
              style={{
                display: "flex",
              }}
            >
              <House /> Início
            </div>
          ) : (
            "Início"
          )
        }
      </NavLink>
      <NavLink
        to="/carrinho"
        className={({ isActive }) => (isActive ? "link-ativo" : "")}
      >
        {({ isActive }) =>
          isActive ? (
            <div
              style={{
                display: "flex",
              }}
            >
              <ShoppingCart />
              Carrinho
            </div>
          ) : (
            "Carrinho"
          )
        }
      </NavLink>
      <NavLink
        to="/formCompras"
        className={({ isActive }) => (isActive ? "link-ativo" : "")}
      >
        {({ isActive }) =>
          isActive ? (
            <div
              style={{
                display: "flex",
              }}
            >
              <ShoppingCart />
              compras
            </div>
          ) : (
            "compras"
          )
        }
      </NavLink>
    </>
  );
};
