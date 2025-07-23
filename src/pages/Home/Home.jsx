import { Cartao } from "../../components/Cartao/Cartao";
import styles from "./Home.module.css";
export const Home = () => {
  return (
    <div className={styles.home}>
      <>
        <h1 className={styles.h1}>Tudo pra facilitar seu dia a dia</h1>
        <p className={styles.p}>
          O que você precisa está aqui. Peça e receba onde estiver.
        </p>
        <Cartao />
      </>
    </div>
  );
};
