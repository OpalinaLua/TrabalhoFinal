import { Outlet } from "react-router";
import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";
import styles from './Layout.module.css';

export const Layout = ({ onSearch, onClear }) => {
  return (
    <>
    <div className={styles.pageContainer}>
    <div className={styles.content}>
    <Header onClear={onClear} onSearch={onSearch} />
      <h1 className={styles.h1}>Tudo pra facilitar seu dia a dia</h1>
      <p className={styles.p}>O que você precisa está aqui. Peça e receba onde estiver.</p>
      </div>
    
      <Outlet />
      <Footer />
      </div>
    </>
  );
};
