import { Cartao } from "../../components/Cartao/Cartao";
import styles from "./Home.module.css";
export const Home = () => {
  return (
    <div className={styles.home}>
      <>
        <h1>Home</h1>
        <Cartao />
      </>
    </div>
  );
};
