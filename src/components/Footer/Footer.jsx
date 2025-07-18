
import { FaArrowRight } from "react-icons/fa";
import styles from "./Footer.module.css";
import { TbTemperatureSun } from "react-icons/tb";
import { IoIosPartlySunny } from "react-icons/io";

export const Footer = () => {
  return (
    <>
      <footer className={styles.footer}>
        <p> &copy; 2025 Mini Loja Todos os direitos reservados</p>
        <p>
          <IoIosPartlySunny /> Confira a previsão do tempo para compras
          inteligentes!! <FaArrowRight color="blue" />{" "}
          <a
            href="https://www.climatempo.com.br/previsao-do-tempo/15-dias/cidade/317/petropolis-rj"
            target="_blank"
          >
            {" "}
            <TbTemperatureSun />{" "}
          </a>
        </p>
      </footer>
    </>
  );
};
