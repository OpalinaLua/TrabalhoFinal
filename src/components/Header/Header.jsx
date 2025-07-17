import { Navbar } from "../Navbar/Navbar";
import styles from "./Header.module.css";

export function Header() {
  const today = new Date();
  const formattedDate = today.toLocaleDateString("pt-BR", {
    weekday: "long",
    day: "numeric",
    month: "long",
  });
  return (
    <header className={styles.header}>
      <div className={styles.logo}> 🛒 Mini Loja </div>
      <div className={styles.date}>📅{formattedDate}</div>
      <Navbar />
    </header>
  );
}
