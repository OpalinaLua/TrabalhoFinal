import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loadingUser, setLoadingUser] = useState(false);
  const navigate = useNavigate();

  const login = (usernameOrEmail, password) => {
    if (
      (usernameOrEmail === "admin" || usernameOrEmail === "admin@teste.com") &&
      password === "123"
    ) {
      setUser({ name: usernameOrEmail, id: 1 });
      localStorage.setItem("user", user);
      return true;
    } else {
      setUser(null);
      return false;
    }
  };

  const logado = !!user;
  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
    navigate("/login");
  };

  useEffect(() => {
    setLoadingUser(true);
    const savedUser = localStorage.getItem("user");
    setUser(savedUser);
    setLoadingUser(false);
  }, [user]);

  return (
    <AuthContext.Provider value={{ user, login, logout, logado }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

const CartContext = createContext(null);

const CartProvider = ({ children }) => {
  const [produtos, setProdutos] = useState([
    {
      id: "",
      qnt: 0,
    },
  ]);
};
