import { useState } from "react";
import Link from "next/link";
import Router from "next/router";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import styles from "../styles/styles.scss";
const styleTopNav = {
  background: "linear-gradient(45deg, #323671 30%, #403271 90%)",
  border: 0,
  borderRadius: 0,
  color: "white",
  boxShadow: "none"
};
const Header = ({ curPage }) => {
const [menuActive, setMenuState] = useState(false)
const handleOpenMenu = () => {
    setMenuState(!menuActive)
    if (menuActive) {
      document.body.style = "overflow: scroll"
    } else {
      document.body.style = "overflow: hidden"
    }
  }

  return (
    <React.Fragment>
      <AppBar position="static" style={styleTopNav}>
        <Container maxWidth="lg">
          <Toolbar disableGutters className={styles.headerContainer}>
            <Typography variant="h4">
              <Link href="/">
                <a>NEXT</a>
              </Link>
            </Typography>
            <div className={styles.topMenu}>
              <Typography variant="h6">
                <Link href="/login">
                  <a className={curPage == "login" ? "activePage" : null}>
                    LOGIN
                  </a>
                </Link>
              </Typography>
              <Typography variant="h6">
                <Link href="/about">
                  <a
                    className={curPage == "about" ? "activePage disable" : null}
                  >
                    ABOUT
                  </a>
                </Link>
              </Typography>
              <Typography variant="h6">
                <Link href="/profile">
                  <a className={curPage == "profile" ? "activePage" : null}>
                    PROFILE
                  </a>
                </Link>
              </Typography>
            </div>


            <div className={styles.TopNavBar}>
            <div className={(menuActive) ? styles.navActive : ""}>
            <div className={styles.navIcon} onClick={() => handleOpenMenu()}>
              <div></div>
            </div>
            </div>
            
          </div>


          </Toolbar>
        </Container>
      </AppBar>
      <style jsx>
        {`
          .MuiPaper-elevation4 {
            box-shadow: 0;
          }
          .activePage {
            color: #ffffff !important;
          }
        `}
      </style>

          {(menuActive) ? 
          <div className={styles.mobileMenu}>
              <Toolbar disableGutters className={styles.mobileNavWrapper}>
        
              <Typography variant="h4">
                <Link href="/login">
                  <a className={curPage == "login" ? "activePage" : null}>
                    LOGIN
                  </a>
                </Link>
              </Typography>
              <Typography variant="h4">
                <Link href="/about">
                  <a
                    className={curPage == "about" ? "activePage disable" : null}
                  >
                    ABOUT
                  </a>
                </Link>
              </Typography>
              <Typography variant="h4">
                <Link href="/profile">
                  <a className={curPage == "profile" ? "activePage" : null}>
                    PROFILE
                  </a>
                </Link>
              </Typography>

          </Toolbar>
          </div>
          : null
        
        }
      
    </React.Fragment>
  );
};
export default Header;
