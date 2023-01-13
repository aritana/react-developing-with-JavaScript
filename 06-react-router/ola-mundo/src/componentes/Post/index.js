import styles from "./Post.module.css";
import React from "react";

export default function Post({ post }) {
  return (
    <div className={styles.post}>
      <img
        className={styles.capa}
        src={`/assets/posts/${post.id}/capa.png`}
        alt="imagem capa do post"
      />
      <h2 className={styles.titulo}>{post.titulo}</h2>
      <button className={styles.botaoLer}>Ler</button>
    </div>
  );
}
