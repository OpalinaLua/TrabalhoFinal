import { useState, useContext } from "react";
import { useNavigate } from "react-router";
import { useAuth } from "../../contexts/AuthContext";

export const Login = () => {
  const [usuarioInput, setUsuarioInput] = useState("");
  const [senhaInput, setSenhaInput] = useState("");
  const { login, user } = useAuth();

  const navigate = useNavigate();

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    login(usuarioInput, senhaInput);
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleLoginSubmit}>
        {" "}
        {}
        <input
          type="text"
          placeholder="Usuário ou Email"
          value={usuarioInput}
          onChange={(e) => setUsuarioInput(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Senha"
          value={senhaInput}
          onChange={(e) => setSenhaInput(e.target.value)}
          required
        />
        <button type="submit">Entrar</button>
      </form>
      {user && <p>Bem-vindo, {user.name}!</p>} {}
    </div>
  );
};
