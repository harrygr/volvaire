import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Volvaire</title>

        <link rel="icon" href="/favicon.svg" />
      </Head>

      <main className={styles.main}>
        <Image
          width={364}
          height={213}
          src="/volvaire.svg"
          alt="Volvaire Logo"
        />
      </main>
    </div>
  );
};

export default Home;
