import { House, ShoppingCart } from "lucide-react";
import { NavLink } from "react-router";
import styles from "./Navbar.module.css";

export const Navbar = () => {
  return (
    <>
      <div className={styles.conteiner}>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? styles.linkAtivo : styles.link)}
        >
          {({ isActive }) =>
            isActive ? (
              <div>
                <House />{"   "}Início
              </div>
            ) : (
              "Início"
            )
          }
        </NavLink>
        <NavLink
          to="/carrinho"
          className={({ isActive }) => (isActive ? styles.linkAtivo : styles.link)}
        >
          {({ isActive }) =>
            isActive ? (
              <div>
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
  );
};
