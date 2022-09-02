import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useSelector, useDispatch } from "react-redux";
import * as dummyApis from "../redux/actions/josnApisAction";
import { useEffect, useState } from "react";
import Dropdown from "../components/dropdown/dropdown";
import { alpha } from "@material-ui/core";
export default function Home() {
  const reducer = useSelector((store) => store);
  const [data, setData] = useState([]);
  console.log(reducer);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(dummyApis.jsonAction());
  }, []);
  const handleClick = (text) => {
    return setData([...data, text]);
  };
  console.log(data);
  const onDelete = (myId) => {
    const updates = data.filter((each, idx) => idx !== myId);
    setData(updates);
  };
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
        <Dropdown placeholder={"Select..."} data={data} onDelete={onDelete}>
          <div className="row">
            {numbers.map((item, index) => {
              return (
                <div
                  key={index}
                  style={{width:"5rem"}}
                  onClick={(e) => handleClick(e.target.textContent)}
                  className="col-6 me-3 alert alert-primary"
                  role="alert"
                >
                  {item}
                </div>
              );
            })}
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

const numbers = [
  "Alpha",
  "Beta",
  "Gamma",
  "Delta",
  "Epsilon",
  "Zeta",
  "Eta",
  "Theta",
  "Iota",
  "Kappa",
  "Lambda",
  "Mu",
  "Nu",
  "Xi",
  "Omicron",
  "Pi",
  "Rho",
  "Sigma",
  "Tau",
  "Upsilon",
  "Phi",
  "Chi",
  "Psi",
  "Omega",
];
