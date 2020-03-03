import { useEffect } from 'react';
import Layout from "../components/Layout";
import Error from "next/error";
import Link from "next/link";
import styles from "../styles/styles.scss"

const Login = () => {

return(
  <Layout
  title="LOGIN | NextJS"
  description="A Nextjs Starter Template built by Jimmy"
  currentPage="login"
  >

    <main>
      <h1 className={styles.title}>
        This is a LOGIN page
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

export default Login
