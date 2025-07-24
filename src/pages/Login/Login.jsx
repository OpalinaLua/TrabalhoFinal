import { useState, useContext } from "react";
import { useNavigate } from "react-router";
import { useAuth } from "../../contexts/AuthContext";
import styles from "./Login.module.css";
export const Login = () => {
  const [usuarioInput, setUsuarioInput] = useState("");
  const [senhaInput, setSenhaInput] = useState("");
  const { login, user } = useAuth();

  const navigate = useNavigate();

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    login(usuarioInput, senhaInput);
    navigate("/");
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.login}>Login</h1>
      <form className={styles.form} onSubmit={handleLoginSubmit}>
        <input
        className={styles.input}
          type="text"
          placeholder="Usuário ou Email"
          value={usuarioInput}
          onChange={(e) => setUsuarioInput(e.target.value)}
          required
        />
        <input
        className={styles.input}
          type="password"
          placeholder="Senha"
          value={senhaInput}
          onChange={(e) => setSenhaInput(e.target.value)}
          required
        />
        <button className={styles.button} type="submit">Entrar</button>
      </form>
      {user && <p>Bem-vindo, {user.name}!</p>} {}
    </div>
  );
};
