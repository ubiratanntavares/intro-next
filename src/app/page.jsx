import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className="containerGlobal">
      <h1 className={styles.tituloHomePage}>Aula Next JS</h1>
      <h2>Exemplo h2</h2>
      <h3>Exemplo h3</h3>
      <p>Texto parágrafo</p>
      <div className={styles.container2}>

      <Image
        src="/sk8.jpg"
        width={50}
        height={50}
        alt="Picture of the author"
        className={styles.imagemHomePage}
        
      />
      <Image
        src="/sk8.jpg"
        width={2048}
        height={1364}
        alt="Picture of the author"
        className={styles.imagemHomePage}
      />
    </div>
    </div>
  );
}
