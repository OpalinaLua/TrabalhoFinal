
import { FaArrowRight } from "react-icons/fa";
import styles from "./Footer.module.css";
import { TbTemperatureSun } from "react-icons/tb";
import { IoIosPartlySunny } from "react-icons/io";

export const Footer = () => {
  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.frase} > &copy; 2025 Mini Loja Todos os direitos reservados</div>
        <div className={styles.frase2} >
          _Confira a previsão do tempo, para compras
          inteligentes_  <FaArrowRight color="black" fontSize="12px" />{" "}
          <a href="https://www.climatempo.com.br/previsao-do-tempo/15-dias/cidade/317/petropolis-rj"
            target="_blank"
          >
            {" "}
            <IoIosPartlySunny color="blue" fontsize="20px"/>{" "}
          </a>
        </div>
      </footer>
    </>
  );
};
