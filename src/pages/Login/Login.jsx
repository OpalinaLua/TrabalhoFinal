import { useState } from "react";

//usuário/email, senha, botão, confirmação de login(usuário/email e senha corretos), navigate para home

export const Login = () => {
  const [ususario, setUsuario] = useState(null);
  const [email, setEmail] = useState(null);
  const login = (usuario, email, senha) => {
    if (
      usuario === "adimin" ||
      (email === "adimin@teste.com" && senha === "123")
    ) {
      setUser({ user });
    } else {
      alert("Usuário ou senha incorretos");
    }
  };
};
