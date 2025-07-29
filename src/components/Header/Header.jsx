import styles from "./Header.module.css";
import { IoCalendarOutline } from "react-icons/io5";
import { Navbar } from "../Navbar/Navbar";
import { LoginNavbar } from "../LoginNavbar/LoginNavbar";
import { useCallback, useState } from "react";

import logo from "./DLPS.png";

export function Header({ onSearch, onClear }) {
  const [searchValue, setSearchValue] = useState("");

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      onSearch(searchValue);
    },
    [searchValue, onSearch]
  );

  const handleChange = useCallback((e) => {
    const value = e.target.value;
    setSearchValue(value);
    onSearch(value);
    console.log(value);
  }, []);

  const today = new Date();

  const formattedDate = today.toLocaleDateString("pt-BR", {
    weekday: "long",
    day: "numeric",
    month: "long",
  });

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        {" "}
        <img
          src={logo}
          style={{ width: "160px", height: "auto" }}
          alt="Nossa Logo"
        />
      </div>
      <div className={styles.date}>
        <IoCalendarOutline /> {formattedDate}{" "}
      </div>
      <div className={styles.botoes}>
        <Navbar />
        <LoginNavbar />
      </div>
      <div>
        <form className={styles.form} onSubmit={handleSubmit}>
          <input
            className={styles.input}
            type="text"
            placeholder="Pesquisar produtos"
            onChange={handleChange}
          />
          <button type="submit" className={styles.button}>
            Pesquisar
          </button>
          <button onClick={onClear} className={styles.button}>
            Limpar
          </button>
        </form>
      </div>
    </header>
  );
}
