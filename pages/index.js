// import Head from "next/head";
// import Image from "next/image";
// import styles from "../styles/Home.module.css";
// import { useSelector, useDispatch } from "react-redux";
// import * as dummyApis from "../redux/actions/josnApisAction";
// import { useEffect, useState } from "react";
// import Dropdown from "../components/dropdown/dropdown";
// import { alpha } from "@material-ui/core";
// export default function Home() {
//   const reducer = useSelector((store) => store);
//   const [data, setData] = useState([]);
//   console.log(reducer);
//   const dispatch = useDispatch();
//   useEffect(() => {
//     dispatch(dummyApis.jsonAction());
//   }, []);
//   const handleClick = (text) => {
//     return setData([...data, text]);
//   };
//   console.log(data);
//   const onDelete = (myId) => {
//     const updates = data.filter((each, idx) => idx !== myId);
//     setData(updates);
//   };
//   return (
//     <div className={styles.container}>
//       <Head></Head>
//       <main className={styles.main}>
//         <h1 className={styles.title}>
//           Welcome to <a href="https://nextjs.org">Next.js!</a>
//         </h1>

//         <p className={styles.description}>
//           Get started by editing{" "}
//           <code className={styles.code}>pages/index.js</code>
//         </p>
//         <Dropdown placeholder={"Select..."} data={data} onDelete={onDelete}>
//           <div className="row">
//             {numbers.map((item, index) => {
//               return (
//                 <div
//                   key={index}
//                   style={{width:"5rem"}}
//                   onClick={(e) => handleClick(e.target.textContent)}
//                   className="col-6 me-3 alert alert-primary"
//                   role="alert"
//                 >
//                   {item}
//                 </div>
//               );
//             })}
//           </div>
//         </Dropdown>
//       </main>

//       <footer className={styles.footer}>
//         <a
//           href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Powered by{" "}
//           <span className={styles.logo}>
//             <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
//           </span>
//         </a>
//       </footer>
//     </div>
//   );
// }

// const numbers = [
//   "Alpha",
//   "Beta",
//   "Gamma",
//   "Delta",
//   "Epsilon",
//   "Zeta",
//   "Eta",
//   "Theta",
//   "Iota",
//   "Kappa",
//   "Lambda",
//   "Mu",
//   "Nu",
//   "Xi",
//   "Omicron",
//   "Pi",
//   "Rho",
//   "Sigma",
//   "Tau",
//   "Upsilon",
//   "Phi",
//   "Chi",
//   "Psi",
//   "Omega",
// ];

import { useState, React } from "react";
import Image from "next/image";
import homeImage from "../assets/homePage.png";
import styles from "../styles/Home.module.css";
import AgentProperties from "../components/property-details/agent-properties";

const Home = () => {
  const data = "fjsdbfdsf";
  const tata = "kdfhgkj";

  const [select, setselect] = useState(false);
  return (
    <div className="mt-5 pt-4">
      <div className={`${styles.homepageContainer} col-12 position-relative`}>
        <Image src={homeImage} layout="fill" alt="Picture of the author" />
      </div>
      <div className={`${styles.spacing} d-flex justify-content-center`}>
        <div className="col-12 col-lg-11">
          <div className="d-flex align-items-center px-3">
            <h1 className="fs_36 fw_500 fontFam_poppins color_cloudBurst ">
              Popular Apartments in Mysuru
            </h1>
            <button
              onClick={() => setselect(false)}
              className={` ${
                select ? styles.UnSelectionButton : styles.homeSelectionButton
              } px-4 py-2 fs_20 fw_5s00 fontFam_poppins ms-4 mb-4 text-nowrap`}
            >
              2 BHK
            </button>
            <button
              onClick={() => setselect(true)}
              className={` ${
                select ? styles.homeSelectionButton : styles.UnSelectionButton
              } px-4 py-2 fs_20 fw_500 fontFam_poppins ms-4 mb-4 text-nowrap`}
            >
              3 BHK
            </button>
          </div>
          <p className="color_grey fs_16 fw_500 fontFam_poppins w-50">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero.
          </p>
          <AgentProperties
            propertyType={
              select
                ? "3BHK flat in Vijayanagar, Mysuru"
                : "2BHK flat in Vijayanagar, Mysuru"
            }
            data={1}
            hide={1}
          />
          <h1 className="fs_36 fw_500 fontFam_poppins color_cloudBurst text-center mt-5">
            Popular Apartments in Mysuru
          </h1>
          <div className="color_grey fs_16 fw_500 fontFam_poppins  d-flex justify-content-center">
            <p className="w-50 text-center">
              {" "}
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
