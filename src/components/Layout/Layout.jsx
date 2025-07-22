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
      <h1>Contéudo</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit provident quas ducimus recusandae mollitia delectus eligendi obcaecati debitis, odit culpa ea earum distinctio deserunt neque asperiores. Officiis nobis sed odit.</p>
      </div>
    
      <Outlet />
      <Footer />
      </div>
    </>
  );
};
