import React from "react";
import { Link } from "react-router-dom";
import styles from "./About.module.css";

const About = () => {
  return (
    <div className={styles.about}>
      <h2>
        Sobre o Happy <span>Moments</span>
      </h2>
      <p>
        Bem-vindo ao Happy Moments, o lugar onde cada instantâneo é uma
        celebração da alegria! Nossa missão é criar um ambiente onde as pessoas
        possam compartilhar e reviver seus momentos mais felizes. Aqui, a
        felicidade é mais do que uma emoção; é uma experiência compartilhada.
      </p>
      <p>
        No Happy Moments, acreditamos que cada foto é uma peça de um
        quebra-cabeça maior, construindo uma narrativa coletiva de alegria. Faça
        parte desta jornada emocionante de compartilhamento e celebração!
      </p>
      <Link to="create/post" className="btn">
        Criar post
      </Link>
    </div>
  );
};

export default About;
