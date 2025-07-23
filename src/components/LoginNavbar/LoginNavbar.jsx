import { LogIn } from "lucide-react";
import { NavLink } from "react-router";
import styles from "./LoginNavbar.module.css";

export const LoginNavbar = () => {
  return (
    <>
      <div className={styles.conteiner}>
        <NavLink
          to="/login"
          className={({ isActive }) =>
            isActive ? styles.linkAtivo : styles.link
          }
        >
          {({ isActive }) =>
            isActive ? (
              <>
                <LogIn /> Login
              </>
            ) : (
              "Login"
            )
          }
        </NavLink>
      </div>
    </>
  );
};
