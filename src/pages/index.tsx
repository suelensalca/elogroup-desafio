import Head from "next/head";
import Register from "./register";
import styles from "./home.module.scss";

import createServer from "../services/server";

let server = createServer;

export default function Home() {
  return (
    <div className={styles.bg}>
      <Head>
        <title>ALLtech - Leads</title>
      </Head>
      <Register />
    </div>
  );
}
