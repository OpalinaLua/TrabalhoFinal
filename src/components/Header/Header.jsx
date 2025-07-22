import { TiShoppingCart } from "react-icons/ti";
import styles from "./Header.module.css";
import { IoCalendarOutline } from "react-icons/io5";
import { Navbar } from "../Navbar/Navbar";
import { LoginNavbar } from "../LoginNavbar/LoginNavbar";
import { useCallback, useState } from "react";

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
        <TiShoppingCart /> Mini Loja{" "}
      </div>
      <div className={styles.date}>
        <IoCalendarOutline /> {formattedDate} </div>
      <Navbar />
      <LoginNavbar />
    </header>
  );
}
