import { useEffect, useState } from "react";
import styles from "../../styles/Header.module.css";
import { isAuth, one_tap_login, authenticate } from "../../actions/auth";
import { Grid, Typography } from "@material-ui/core";

const Header = () => {
  const [user, setUser] = useState();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    if (isAuth()) {
      setUser(isAuth());
    }
  }, [isAuthenticated]);

  const handleOnetapResponse = (response) => {
    one_tap_login({
      googleToken: response.credential,
      domain: process.env.NEXT_PUBLIC_DOMAIN_ID,
    })
      .then((result) => {
        authenticate(result, () => {
          setIsAuthenticated(true);
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    if (!isAuth()) {
      window.onload = function () {
        google.accounts.id.initialize({
          client_id: process.env.NEXT_PUBLIC_GOOGLE_CLIEND_ID,
          callback: handleOnetapResponse,
        });
        google.accounts.id.prompt();
      };
    }
  }, []);

  return (
    <div className={styles.outercontainer}>
      <Grid container justify="space-between">
        <Grid item>
          <a href="/">
            <img
              src="/99chill-logo.png"
              className={styles.logo}
              alt="99chill.com"
            />
          </a>
        </Grid>
      </Grid>
    </div>
  );
};

export default Header;
