import { useEffect } from 'react';
import Layout from "../components/Layout";
import Error from "next/error";
import Link from "next/link";
import styles from "../styles/styles.scss"

const About = () => {

return(
  <Layout
  title="About | NextJS"
  description="A Nextjs Starter Template built by Jimmy"
  currentPage="about"
  >

    <main>
      <h1 className={styles.title}>
        This is ABOUT page
      </h1>

      <p className="description">
        Get started by editing <code>pages/index.js</code>
      </p>

     
    </main>

    <footer>

    </footer>

    </Layout>
)
}

export default About
