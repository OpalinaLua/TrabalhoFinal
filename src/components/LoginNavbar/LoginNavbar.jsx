import { LogIn } from "lucide-react";
import { NavLink } from "react-router";
import styles from "./LoginNavbar.module.css";

export const LoginNavbar = () => {
  return (
    <>
      <NavLink
        to="/login"
        className={({ isActive }) => (isActive ? "link-ativo" : "")}
      >
        {({ isActive }) =>
          isActive ? (
            <div
              style={{
                display: "flex",
              }}
            >
              <LogIn /> Login
            </div>
          ) : (
            "Login"
          )
        }
      </NavLink>
    </>
  );
};
