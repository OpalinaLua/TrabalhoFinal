import styles from './Footer.module.css';

export const Footer = () => {
    return(
        <>
        <footer className={styles.footer}>
            <p> Mini Loja Todos os direitos reservados</p>
            <p>⛅ Confira a previsão do tempo para compras inteligentes!! ➡️ <a href="https://www.climatempo.com.br/previsao-do-tempo/15-dias/cidade/317/petropolis-rj" target='_blank'> 🌡️ </a></p>
        </footer>
        </>
    );

}