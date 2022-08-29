import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useSelector, useDispatch } from "react-redux";
import * as dummyApis from "../redux/actions/josnApisAction";
import { useEffect } from "react";
import Dropdown from "../components/dropdown/dropdown";
export default function Home() {
  const reducer = useSelector((store) => store);
  console.log(reducer);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(dummyApis.jsonAction());
  }, []);

  return (
    <div className={styles.container}>
      <Head></Head>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className={styles.description}>
          Get started by editing{" "}
          <code className={styles.code}>pages/index.js</code>
        </p>
        <Dropdown placeholder={"Select..."}>
          <div style={{width:"40rem"}} class="alert alert-primary" role="alert">
            A simple primary alert—check it out!
          </div>
        </Dropdown>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}
