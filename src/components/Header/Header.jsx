import React from 'react';
import { Link } from 'react-router';
import styles from './Header.module.css';

export const Header = () => {
    const today = new Date();
    const formattedDate = today.toLocaleDateString("pt-BR",{weekday:"long", day:"numeric", month:"long",});
    
    return(
        <header className={styles.header}>
            <h1> 🛒 Mini Loja </h1>
            <nav>
                <ul>
                    <li>
                        <Link to="/" >Início </Link></li>
                        <li><Link to="/produtos">Produtos</Link></li>
                        <li><Link to="/login">Login</Link></li>
                </ul>
            </nav>
           
            <div className={styles.date}>📅{formattedDate}</div>
        </header>
    );     
};

