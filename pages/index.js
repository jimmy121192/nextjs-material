import { useEffect } from "react";
import Layout from "../components/Layout";
import Error from "next/error";
import Link from "next/link";
import styles from "../styles/styles.scss";
const Home = () => {
  useEffect(() => {
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker
        .register("/service-worker.js")
        .then(registration => {
          console.log("service worker registration successful", registration);
        })
        .catch(err => {
          console.warn("service worker registration failed!", err.message);
        });
    }
  });
  return (
    <Layout
      title="Next Material"
      description="A Nextjs Starter Template built by Jimmy"
    >
      <main>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>
        <p className="description">
          Get started by editing <code>pages/index.js</code>
        </p>
      </main>
      <footer></footer>
    </Layout>
  );
};
export default Home;
