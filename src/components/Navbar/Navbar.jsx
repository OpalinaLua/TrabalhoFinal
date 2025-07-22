import { House, ShoppingCart } from "lucide-react";
import { NavLink } from "react-router";
import styles from "./Navbar.module.css";

export const Navbar = () => {
  return (
    <>
      <div className={styles.conteiner}>
        <div>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? styles.linkAtivo : styles.link)}
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
        </div>
        <div className={styles.conteiner2}>
        <NavLink
          to="/carrinho"
          className={({ isActive }) => (isActive ? styles.linkAtivo : styles.link)}
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
      </div>
     </>
   )
  }