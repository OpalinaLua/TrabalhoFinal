import { TiShoppingCart } from "react-icons/ti";
import styles from "./Header.module.css";
import { IoCalendarOutline } from "react-icons/io5";
import { Navbar } from "../Navbar/Navbar";
import { LoginNavbar } from "../LoginNavbar/LoginNavbar";

export function Header() {
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
