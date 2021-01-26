import { Grid, Hidden, makeStyles } from '@material-ui/core'
import React from 'react'
import { Link } from 'react-router-dom';
import footerAdornment from '../../assets/Footer Adornment.svg'
import facebookICon from "../../assets/facebook.svg";
import instagramIcon from "../../assets/instagram.svg";
import twitterIcon from "../../assets/twitter.svg";
const useStyle = makeStyles((theme) => ({
  footer: {
    backgroundColor: theme.palette.common.blue,
    width: "100%",
    position: "relative",
    zIndex: 1303,
  },
  adornment: {
    width: "25em",
    verticalAlign: "bottom",
    [theme.breakpoints.down("md")]: {
      width: "21em",
    },
    [theme.breakpoints.down("xs")]: {
      width: "15em",
    },
  },
  mainContainer: {
    position: "absolute",
  },
  link: {
    color: "white",
    fontFamily: "Arial",
    fontSize: ".75rem",
    fontWeight: "bold",
    textDecoration: "none",
  },
  gridItem: {
    margin: "3em",
  },
  icon: {
    height: "4em",
    width: "4em",
    [theme.breakpoints.down("md")]:{
           height: "3em",
    width: "3em",
      }
  },
  socialContainer:{
      position:"absolute",
      marginTop:"-6em",
      right:"1.5em"
      ,[theme.breakpoints.down("xs")]:{
          right:"0.6em"
      }
  }
}));
function Footer() {
    const classes = useStyle();
    return (
      <footer className={classes.footer}>
        <Hidden mdDown>
          <Grid
            container
            justify="center"
            className={classes.mainContainer}
            //   spacing={8}
          >
            <Grid item className={classes.gridItem}>
              <Grid container direction="column" spacing={2}>
                <Grid item component={Link} to="/" className={classes.link}>
                  Home
                </Grid>
              </Grid>
            </Grid>
            <Grid item className={classes.gridItem}>
              <Grid container direction="column" spacing={2}>
                <Grid
                  item
                  component={Link}
                  to="/services"
                  className={classes.link}
                >
                  Services
                </Grid>
                <Grid
                  item
                  className={classes.link}
                  component={Link}
                  to="/customsoftware"
                >
                  Custom Software Development
                </Grid>
                <Grid
                  item
                  className={classes.link}
                  component={Link}
                  to="/mobileapps"
                >
                  Mobile App Development
                </Grid>
                <Grid
                  item
                  className={classes.link}
                  component={Link}
                  to="/websites"
                >
                  Website Development
                </Grid>
              </Grid>
            </Grid>
            <Grid item className={classes.gridItem}>
              <Grid container direction="column" spacing={2}>
                <Grid
                  item
                  className={classes.link}
                  component={Link}
                  to="/revolution"
                >
                  The Revolution
                </Grid>
                <Grid
                  item
                  className={classes.link}
                  component={Link}
                  to="/revolution"
                >
                  Vision
                </Grid>
                <Grid
                  item
                  className={classes.link}
                  component={Link}
                  to="/revolution"
                >
                  Technology
                </Grid>
                <Grid
                  item
                  className={classes.link}
                  component={Link}
                  to="/revolution"
                >
                  Process
                </Grid>
              </Grid>
            </Grid>
            <Grid item className={classes.gridItem}>
              <Grid container direction="column" spacing={2}>
                <Grid
                  item
                  className={classes.link}
                  component={Link}
                  to="/about"
                >
                  About Us
                </Grid>
                <Grid
                  item
                  className={classes.link}
                  component={Link}
                  to="/about"
                >
                  History
                </Grid>
                <Grid
                  item
                  className={classes.link}
                  component={Link}
                  to="/about"
                >
                  Team
                </Grid>
              </Grid>
            </Grid>
            <Grid item className={classes.gridItem}>
              <Grid container direction="column" spacing={2}>
                <Grid
                  item
                  className={classes.link}
                  component={Link}
                  to="/contact"
                >
                  Contact Us
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Hidden>

        <img
          alt="black decorative slash"
          src={footerAdornment}
          className={classes.adornment}
        />
        <Grid container className={classes.socialContainer} justify="flex-end" spacing={1}>
          <Grid
            item
            component={"a"}
            href="http://www.facebook.com"
            rel="noopener noreferrer"
            target="_blank"
          >
            <img
              alt="facebook logo"
              src={facebookICon}
              className={classes.icon}
            />
          </Grid>
          <Grid
            item
            component={"a"}
            href="http://www.twitter.com"
            rel="noopener noreferrer"
            target="_blank"
          >
            <img
              alt="twitter logo"
              src={twitterIcon}
              className={classes.icon}
            />
          </Grid>
          <Grid
            item
            component={"a"}
            href="http://www.instagram.com"
            rel="noopener noreferrer"
            target="_blank"
          >
            <img
              alt="instagram logo"
              src={instagramIcon}
              className={classes.icon}
            />
          </Grid>
        </Grid>
      </footer>
    );
}

export default Footer
