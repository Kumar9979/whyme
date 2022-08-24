import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "remixicon/fonts/remixicon.css";
import Script from "next/script";
import Head from "next/head";
import { Provider } from "react-redux";
import { store } from "../redux/store";
import Navbar from "../components/navbar/navbar";
import 'antd/dist/antd.css';
function MyApp({ Component, pageProps }) {
  const profilePaths = [
    "/profile/recently-viewed",
    "/profile/shortlisted-properties",
    "/profile/my-properties",
    "/profile/add-a-property",
  ];
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1"
          crossorigin="anonymous"
        />
      </Head>
      <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW"
        crossorigin="anonymous"
      />

      <Provider store={store}>
        <Navbar />
          <Component {...pageProps} />
      </Provider>
    </>
  );
}

export default MyApp;
