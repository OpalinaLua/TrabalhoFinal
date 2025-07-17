import { createContext, useState } from "react";
import { useNavigate } from "react-router";

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const login = (usernameOrEmail, password) => {
    if (
      (usernameOrEmail === "admin" || usernameOrEmail === "admin@teste.com") &&
      password === "123"
    ) {
      setUser({ name: usernameOrEmail });
      alert("Login bem-sucedido!");
      navigate("/");
    } else {
      alert("Usuário ou senha incorretos");
      setUser(null);
    }
  };

  const logout = () => {
    setUser(null);
    alert("Desconectado!");
    navigate("/login");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {" "}
      {}
      {children}
    </AuthContext.Provider>
  );
};
