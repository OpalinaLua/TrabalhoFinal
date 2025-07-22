import { House, ShoppingCart } from "lucide-react";
import { NavLink } from "react-router";
import styles from "./Navbar.module.css";

export const Navbar = () => {
  return (
    <>
      <div className={styles.conteiner}>
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
      </div>
     </>
   )