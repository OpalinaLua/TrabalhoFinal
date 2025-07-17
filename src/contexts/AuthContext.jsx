import { createContext, useState } from "react";

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (usernameOrEmail, password) => {
    if (
      (usernameOrEmail === "admin" || usernameOrEmail === "admin@teste.com") &&
      password === "123"
    ) {
      setUser({ name: usernameOrEmail });
      alert("Login bem-sucedido!");
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
