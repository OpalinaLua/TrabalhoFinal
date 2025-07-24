import { LogIn } from "lucide-react";
import { NavLink } from "react-router";
import styles from "./LoginNavbar.module.css";
import { useAuth } from "../../contexts/AuthContext";

export const LoginNavbar = () => {
  const { logout } = useAuth();

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
        <button className={styles.button} onClick={logout}>
          Logout
        </button>
      </div>
    </>
  );
};
