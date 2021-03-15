import {
  Button,
  Grid,
  makeStyles,
  Typography,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import ButtonArrow from "./ButtonArrow";
import CustomSoftware from "../../assets/Custom Software Icon.svg";
import MobileAppIcon from "../../assets/mobileIcon.svg";
import WebsiteIcon from "../../assets/websiteIcon.svg";

const useStyles = makeStyles((theme) => ({
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
}));
const Services = () => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));
  return (
    <Grid container direction="column">
      <Grid
        item
        style={{
          marginLeft: matchesSM ? 0 : "5em",
          marginTop: matchesSM ? "1em" : "2em",
        }}
      >
        <Typography
          gutterBottom
          variant="h2"
          align={matchesSM ? "center" : undefined}
        >
          Services
        </Typography>
      </Grid>
      <Grid item>
        <Grid
          container
          direction="row"
          justify={matchesSM ? "center" : "flex-end"}
          className={classes.serviceContainer}
          style={{ marginTop: matchesSM ? "1rem" : "5rem" }}
        >
          <Grid
            item
            style={{
              textAlign: matchesSM ? "center" : undefined,
              width: matchesSM ? undefined : "35em",
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
              marginTop: matchesSM ? "2em" : 0,
            }}
            item
          >
            <img
              className={classes.icon}
              alt="Mobile icon"
              src={MobileAppIcon}
              width="250em"
            />
          </Grid>
        </Grid>
      </Grid>
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
          <Grid
            item
            style={{
              marginTop: matchesSM ? "2em" : 0,
            }}
          >
            <img
              className={classes.icon}
              alt="custom software icon"
              src={CustomSoftware}
              width="250em"
            />
          </Grid>
        </Grid>
      </Grid>
      {/* End of Services Block */}
      {/* Website Block */}
      <Grid item>
        <Grid
          container
          direction="row"
          justify={matchesSM ? "center" : "flex-end"}
          className={classes.serviceContainer}
          style={{ marginBottom: "10rem" }}
        >
          <Grid
            item
            style={{
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
          <Grid
            item
            style={{
              marginRight: matchesSM ? 0 : "5em",
              marginTop: matchesSM ? "2em" : 0,
            }}
          >
            <img
              className={classes.icon}
              alt=" website icon"
              width="250em"
              src={WebsiteIcon}
            />
          </Grid>
        </Grid>
      </Grid>
      {/* End of Website Block */}
    </Grid>
  );
};

export default Services;
