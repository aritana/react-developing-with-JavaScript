import styles from "./Banner.module.css";

import React from "react";
import circuloColorido from "assets/img/circulo_colorido.png";
import minhaFoto from "assets/img/minha_foto.jpg";

export default function Banner() {
  return (
    <div className={styles.banner}>
      <div className={styles.apresentacao}>
        <h1 className={styles.titulo}>Olá, Mundo!</h1>
        <p className={styles.paragrafo}>
          Boas vindas ao meu espaço! Sou o Aritana Noara C Santos.
        </p>
      </div>
      <div className={styles.imagens}>
        <img
          className={styles.circuloColorido}
          src={circuloColorido}
          aria-hidden={true}
        />

        <img
          className={styles.minhaFoto}
          src={minhaFoto}
          alt="foto do Aritana sorrindo"
        ></img>
      </div>
    </div>
  );
}
