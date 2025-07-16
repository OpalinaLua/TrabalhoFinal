import styles from './Footer.module.css';

export const Footer = () => {
    return(
        <footer className={styles.footer}>
<p> {newDate().getFullYear()} Mini Loja Todos os direitos reservados</p>
<p>⛅ Confira a previsão do tempo para compras inteligentes! </p>
        </footer>
    );

}