import Head from "next/head";
import Container from "@material-ui/core/Container";
import Header from "./Header";
const Layout = ({ children, title, description, currentPage }) => {
  return (
    <React.Fragment>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description}></meta>
      </Head>
      <Header curPage={currentPage} />
      <Container maxWidth="lg">{children}</Container>
    </React.Fragment>
  );
};
export default Layout;
