import PostModelo from "componentes/PostModelo";
import React from "react";
import fotoCapa from "assets/img/sobre_mim_capa.png";
import styles from "./SobreMim.module.css";
import fotoSobreMim from "assets/img/sobre_mim_foto.jpg";

export default function SobreMim() {
  return (
    <PostModelo fotoCapa={fotoCapa} titulo="Sobre mim">
      <h3 className={styles.subtitulo}>Olá, eu so ou Aritana.</h3>
      <img
        src={fotoSobreMim}
        className={styles.fotoSobreMim}
        alt="Foto do Aritana Sorrindo"
      />

      <p className={styles.paragrafo}>
        Meu nome tem sua origem na cultura indígena brasileira. Havia um grande
        líder indígena no Xingu chamado Aritana Aritana Yawalapiti.
      </p>
      <p className={styles.paragrafo}>
        Meu pai era um indígena Guarani, utilizava o cocar, era curandeiro, em
        outras palavra, ele conhecia o poder de cura das plantas a fazia
        compostos para curar doenças.
      </p>
      <p className={styles.paragrafo}>
        Eu não segui a tradição das plantas medicinais mais me enveredei pelas
        palavras mágicas das linguagens de programação.
      </p>
      <p className={styles.paragrafo}>
        Em 2022, me formei em engenharia de computação e sigo na estrada para me
        tornar um bom desenvolvedor de software.
      </p>
      <p className={styles.paragrafo}>
        Já trabalhei com Java, Kotlin (Android), HTML, CSS e estou a aprender
        React para <i>front wend</i>
      </p>
      <p className={styles.paragrafo}>
        Programar é divertido, uma arte, criar novas coisas, é ajudar as pessoas
        a resolver seus problemas. Se alguem que está começando me pedisse um
        conselho, eu diria: Um passo de cada vez na direção dos seus sonhos.
      </p>
    </PostModelo>
  );
}
