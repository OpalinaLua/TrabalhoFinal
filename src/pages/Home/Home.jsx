import { Cartao } from "../../components/Cartao/Cartao";
import styles from "./Home.module.css";
export const Home = ({ search }) => {
  return (
    <div className={styles.home}>
      <>
        <Cartao search={search} />
      </>
    </div>
  );
};
