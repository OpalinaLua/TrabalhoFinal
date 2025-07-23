import { FaArrowRight } from "react-icons/fa";
import styles from "./Footer.module.css";
import { TbTemperatureSun } from "react-icons/tb";
import { IoIosPartlySunny } from "react-icons/io";
import axios from "axios";
import { useEffect, useState } from "react";

export const Footer = () => {
  const [weather, setWeather] = useState (null);
  useEffect (() => {
    navigator.geolocation.getCurrentPosition((pos) => {
      const { latitude, longitude} = pos.coords;
      axios.get(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`).then((res) => {
        setWeather(res.data.current_weather);
      })
      .catch(() =>{
        setWeather(null);
      });
    });
  }, [] );

  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.frase} > &copy;  Copyright 2025 - E-commerce DLPS - Todos os direitos reservados <strong>DLPS</strong> com Agência de Restaurantes Online S.A. <br></br>
        CNPJ 14.000.000/0001-00 <br></br> Rua Bingen, n°130, Bingen,Petrópolis/RJ -  CEP 25680-270</div>
        
          {weather ? (
            <p className={styles.tempo}>Tempo agora:{weather.temperature} °C </p>
          ) : (
            <p>Carregando previsão do tempo...</p>
          )}
          
          </footer>

    </>
  );
};
