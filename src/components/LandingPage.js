import {
  Button,
  Card,
  CardContent,
  Grid,
  makeStyles,
  Typography,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";
import React from "react";
import Lottie from "react-lottie";
import animationData from "../animations/landinganimation/data";
import ButtonArrow from "./ui/ButtonArrow";
import CustomSoftware from "../assets/Custom Software Icon.svg";
import MobileAppIcon from '../assets/mobileIcon.svg'
import WebsiteIcon from "../assets/websiteIcon.svg";
import RevolutionBg from '../assets/repeatingBackground.svg'
import InfoBg from '../assets/infoBackground.svg'
import CallToAction from "./ui/CallToAction";
import { Link } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  animation: {
    maxWidth: "50em",
    minWidth: "21em",
    marginTop: "2em",
    marginLeft: "10%",
    [theme.breakpoints.down("sm")]: {
      maxWidth: "30em",
    },
  },
  estimateButton: {
    ...theme.typography.estimate,
    backgroundColor: theme.palette.common.orange,
    borderRadius: 50,
    height: 45,
    width: 145,
    marginRight: 40,
    "&:hover": {
      backgroundColor: theme.palette.secondary.light,
    },
  },
  buttonContainer: {
    marginTop: "1em",
  },
  learnButtonHero: {
    ...theme.typography.learnButton,
    fontSize: "0.9rem",
    height: 45,
    width: 145,
  },
  learnButton: {
    ...theme.typography.learnButton,
    fontSize: ".7rem",
    height: 35,
    padding: 5,
    [theme.breakpoints.down("sm")]: {
      marginBottom: "2em",
    },
  },
  mainContainer: {
    marginTop: "5em",
    [theme.breakpoints.down("md")]: {
      marginTop: "3em",
    },
    [theme.breakpoints.down("xs")]: {
      marginTop: "2em",
    },
  },
  heroTextContainer: {
    minWidth: "21.5em",
    marginLeft: "1em",
    // marginBottom: "3em",
    [theme.breakpoints.down("xs")]: {
      marginLeft: 0,
    },
  },
  specialText: {
    fontFamily: "Pacifico",
    color: theme.palette.common.orange,
  },
  subtitle: {
    marginBottom: "1em",
  },
  icon: {
    marginLeft: "2em",
    [theme.breakpoints.down("xs")]: {
      marginLeft: "0px",
    },
  },
  serviceContainer: {
    marginTop: "12em",
    [theme.breakpoints.down("sm")]: {
      padding: "25px",
    },
  },
  revolutionBg: {
    backgroundImage: `url(${RevolutionBg})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "100%",
    width: "100%",
  },
  infoBg: {
    backgroundImage: `url(${InfoBg})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "100%",
    width: "100%",
  },
  revolutionCard: {
    position: "absolute",
    boxShadow: theme.shadows[10],
    borderRadius: 15,
    padding: "10em",
    [theme.breakpoints.down("sm")]: {
      padding: "8em",
      paddingBottom: "8em",
      paddingLeft: "0px",
      paddingRight: "0px",
      borderRadius: 9,
      width: "100%",
    },
  },
}));
function LandingPage() {
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const classes = useStyles();
  return (
    <Grid container direction="column" className={classes.mainContainer}>
      <Grid item>
        {/* Hero Block */}
        <Grid container direction="row" alignItems="center" justify="flex-end">
          <Grid item sm className={classes.heroTextContainer}>
            <Typography align="center" variant="h2">
              Bringing West Coast Technology <br /> To the Midwest{" "}
            </Typography>
            <Grid container justify="center" buttonContainer>
              <Grid item>
                <Button
                  component={Link}
                  to="/estimate"
                  variant="contained"
                  className={classes.estimateButton}
                >
                  Free Estimate
                </Button>
              </Grid>
              <Grid item>
                <Button
                  component={Link}
                  to="/revolution"
                  variant="outlined"
                  className={classes.learnButtonHero}
                >
                  <span style={{ marginRight: 10 }}> Learn More</span>
                  <ButtonArrow
                    width={15}
                    height={15}
                    fill={theme.palette.common.blue}
                  />
                </Button>
              </Grid>
            </Grid>
          </Grid>
          <Grid item sm classesName={classes.animation}>
            <Lottie options={defaultOptions} height={"100%"} width={"100%"} />
          </Grid>
        </Grid>
      </Grid>
      {/* End Of  Hero Block */}
      {/* Services Block */}
      <Grid item>
        <Grid
          container
          direction="row"
          justify={matchesSM ? "center" : undefined}
          className={classes.serviceContainer}
        >
          <Grid
            item
            style={{
              marginLeft: matchesSM ? 0 : "5em",
              textAlign: matchesSM ? "center" : undefined,
            }}
          >
            <Typography variant="h4">Custom Software Development</Typography>
            <Typography variant="subtitle1" className={classes.subtitle}>
              Save Energy. Save Time . Save Money
            </Typography>
            <Typography variant="subtitle1">
              Complete digital solutions, from investigation to
              <span className={classes.specialText}>celebration</span>
            </Typography>
            <Button
              component={Link}
              to="/customsoftware"
              variant="outlined"
              className={classes.learnButton}
            >
              <span style={{ marginRight: 10 }}> Learn More</span>
              <ButtonArrow
                width={15}
                height={15}
                fill={theme.palette.common.blue}
              />
            </Button>
          </Grid>
          <Grid item>
            <img
              className={classes.icon}
              alt="custom software icon"
              src={CustomSoftware}
            />
          </Grid>
        </Grid>
      </Grid>
      {/* End of Services Block */}
      {/*Start Of Mobile Block */}
      <Grid item>
        <Grid
          container
          direction="row"
          justify={matchesSM ? "center" : "flex-end"}
          className={classes.serviceContainer}
        >
          <Grid
            item
            style={{
              textAlign: matchesSM ? "center" : undefined,
            }}
          >
            <Typography variant="h4">iOS/ Android App Development</Typography>
            <Typography variant="subtitle1" className={classes.subtitle}>
              Extend Functionality. Extend Access . Increase Engagement
            </Typography>
            <Typography variant="subtitle1">
              Integrate your web experience or create standalone app
              {matchesSM ? null : <br />} with either mobile platform.
            </Typography>
            <Button
              component={Link}
              to="/mobileapp"
              variant="outlined"
              className={classes.learnButton}
            >
              <span style={{ marginRight: 10 }}> Learn More</span>
              <ButtonArrow
                width={15}
                height={15}
                fill={theme.palette.common.blue}
              />
            </Button>
          </Grid>
          <Grid
            style={{
              marginRight: matchesSM ? 0 : "5em",
            }}
            item
          >
            <img
              className={classes.icon}
              alt="Mobile icon"
              src={MobileAppIcon}
            />
          </Grid>
        </Grid>
      </Grid>
      {/*End of Mobile Block */}
      {/* Website Block */}
      <Grid item>
        <Grid
          container
          direction="row"
          justify={matchesSM ? "center" : undefined}
          className={classes.serviceContainer}
        >
          <Grid
            item
            style={{
              marginLeft: matchesSM ? 0 : "5em",
              textAlign: matchesSM ? "center" : undefined,
            }}
          >
            <Typography variant="h4">Website Development</Typography>
            <Typography variant="subtitle1" className={classes.subtitle}>
              Reach More. Discover More. Sell More.
            </Typography>
            <Typography variant="subtitle1">
              Optimized for search Engines, built for speed
              <span className={classes.specialText}>celebration</span>
            </Typography>
            <Button
              component={Link}
              to="/website"
              variant="outlined"
              className={classes.learnButton}
            >
              <span style={{ marginRight: 10 }}> Learn More</span>
              <ButtonArrow
                width={15}
                height={15}
                fill={theme.palette.common.blue}
              />
            </Button>
          </Grid>
          <Grid item>
            <img
              className={classes.icon}
              alt=" website icon"
              src={WebsiteIcon}
            />
          </Grid>
        </Grid>
      </Grid>
      {/* End of Website Block */}
      {/* Start of Revolution Block */}
      <Grid item>
        <Grid
          container
          style={{ height: "100em", marginTop: "12em" }}
          alignItems="center"
          justify="center"
        >
          <Card className={classes.revolutionCard}>
            <CardContent>
              <Grid
                container
                direction="column"
                style={{ textAlign: "center" }}
              >
                <Grid item>
                  <Typography variant="h3" gutterBottom>
                    The Revolution
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant="subtitle1">
                    Visionary insights coupled with cutting-edge technology is
                    recipe of revolution.
                  </Typography>
                  <Button
                    component={Link}
                    to="/revolution"
                    variant="outlined"
                    className={classes.learnButtonHero}
                  >
                    <span style={{ marginRight: 10 }}> Learn More</span>
                    <ButtonArrow
                      width={15}
                      height={15}
                      fill={theme.palette.common.blue}
                    />
                  </Button>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
          <div className={classes.revolutionBg} />
        </Grid>
      </Grid>
      {/* End of Revolution Block */}
      {/*Start of Information Block */}
      <Grid
        alignItems="center"
        direction="row"
        container
        style={{ height: "80em" }}
      >
        <Grid
          item
          container
          direction={matchesXS ? "column" : "row"}
          style={{
            position: "absolute",
            textAlign: matchesXS ? "center" : "inherit",
          }}
          spacing={matchesXS ? 10 : 0}
        >
          <Grid
            item
            sm
            style={{ marginLeft: matchesSM ? 0 : matchesXS ? "2em" : "5em" }}
          >
            <Grid container direction="column">
              <Typography variant="h2" style={{ color: "white" }}>
                About Us
              </Typography>
              <Typography variant="subtitle2">Let's get Personal.</Typography>
              <Grid item>
                <Button
                  component={Link}
                  to="/about"
                  style={{ color: "white", borderColor: "white" }}
                  variant="outlined"
                  className={classes.learnButtonHero}
                >
                  <span style={{ marginRight: 10 }}> Learn More</span>
                  <ButtonArrow width={15} height={15} fill={"white"} />
                </Button>
              </Grid>
            </Grid>
          </Grid>
          <Grid
            sm
            item
            style={{
              marginRight: matchesSM ? 0 : matchesXS ? "2em" : "5em",
              textAlign: matchesXS ? "center" : "right",
            }}
          >
            <Grid container direction="column">
              <Typography variant="h2" style={{ color: "white" }}>
                Contact Us
              </Typography>
              <Typography variant="subtitle2">
                Say Hello.
                <span role="img" aria-label="waving hand"></span>
              </Typography>
              <Grid item>
                <Button
                  component={Link}
                  to="/contact"
                  style={{ color: "white", borderColor: "white" }}
                  variant="outlined"
                  className={classes.learnButtonHero}
                >
                  <span style={{ marginRight: 10 }}> Learn More</span>
                  <ButtonArrow width={15} height={15} fill={"white"} />
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <div className={classes.infoBg} />
      </Grid>

      {/* End Of Information Block */}

      {/*Call To Action Block */}
      <Grid item>
        <CallToAction />
      </Grid>
    </Grid>
  );
}

export default LandingPage;
