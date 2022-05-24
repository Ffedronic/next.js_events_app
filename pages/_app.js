import "../styles/globals.css";
import Layout from "../components/layout/Layout";
import { NotificationContextProvider } from "../store/notification-context";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <NotificationContextProvider>
      <Layout>
        <Head>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
        </Head>
        <Component {...pageProps} />{" "}
      </Layout>
    </NotificationContextProvider>
  );
}

export default MyApp;
