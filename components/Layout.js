import Link from 'next/link';
import Head from 'next/head';
import Router from 'next/router';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Container from '@material-ui/core/Container';

import styles from "../styles/styles.scss"

const styleTopNav = {
    background: 'linear-gradient(45deg, #323671 30%, #403271 90%)',
    border: 0,
    borderRadius: 0,
    color: 'white',
    padding: '0 30px',
    boxShadow: 'none'
  };

const Layout = ({children, title, description, currentPage}) => {
    return(
    <React.Fragment>
    <Head>
        <title>{title}</title>
        <meta name="description" content={description}></meta>
        
    </Head>

        <AppBar position="static" style={styleTopNav}>
        <Container maxWidth="lg"> 
            <Toolbar disableGutters className={styles.headerContainer}>
            <Typography variant="h4">
            <Link href="/"><a>NEXT</a></Link>
            </Typography>

            <div className={styles.topMenu}>
            <Typography variant="h6">
               <Link href="/login"><a className={(currentPage == "login") ? "activePage" : null}>LOGIN</a></Link>
            </Typography>
            <Typography variant="h6">
            <Link href="/about"><a className={(currentPage == "about") ? "activePage disable" : null}>ABOUT</a></Link>
            </Typography>
            <Typography variant="h6">
            <Link href="/profile"><a className={(currentPage == "profile") ? "activePage" : null}>PROFILE</a></Link>
            </Typography>
            </div>
            </Toolbar>
            </Container>
        </AppBar>

    <Container maxWidth="lg"> 
        {children}
    </Container>
    <style jsx>
        {`
        .MuiPaper-elevation4{
            box-shadow:0;
        }
        .activePage{
            color: #FFFFFF !important;
        }
        `}
    </style>
    </React.Fragment>
    )
}

export default Layout;