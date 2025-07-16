import { createContext, useState } from "react";

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [nome, setNome] = useState("Pedro");

  return (
    <AuthContext.Provider value={{ nome }}>{children}</AuthContext.Provider>
  );
};
