import {
  Button,
  Grid,
  makeStyles,
  Typography,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";
import React from "react";
import ButtonArrow from "./ButtonArrow";
import background from "../../assets/background.jpg";
import mobileBg from "../../assets/mobileBackground.jpg";
import { Link } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  learnButton: {
    ...theme.typography.learnButton,
    fontSize: ".7rem",
    height: 35,
    margin: "2em",
    padding: 5,
    [theme.breakpoints.down("sm")]: {
      marginBottom: "2em",
    },
  },
  background: {
    backgroundImage: `url(${background})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
    height: "60em",
    width: "100%",
    [theme.breakpoints.down("md")]: {
      backgroundImage: `url(${mobileBg})`,
      backgroundAttachment: "inherit",
    },
  },
  estimate: {
    ...theme.typography.estimate,
    borderRadius: 50,
    height: 80,
    width: 205,
    backgroundColor: theme.palette.common.orange,
    fontSize: "1.5rem",
    marginRight: "5em",
    marginLeft: "2em",
    [theme.breakpoints.down("sm")]: {
      marginRight: 0,
      marginLeft: 0,
    },
  },
}));
function CallToAction() {
  const classes = useStyles();
  const theme = useTheme();
  const matchSM = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Grid
      container
      className={classes.background}
      alignItems="center"
      justify={matchSM ? "center" : "space-between"}
      direction={matchSM ? "column" : "row"}
    >
      <Grid item>
        <Grid
          container
          direction="column"
          style={{
            marginLeft: matchSM ? 0 : "5em",
            textAlign: matchSM ? "center" : "inherit",
          }}
        >
          <Grid item>
            <Typography variant="h2">
              Simple Software
              <br />
              Revolutionary Results
            </Typography>
            <Typography variant="subtile2" style={{ fontSize: "1.5rem" }}>
              Take advantage of the 21st Century
            </Typography>
            <Grid container item justify={matchSM ? "center" : undefined}>
              <Button
                component={Link}
                to="/revolution"
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
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <Button
          component={Link}
          to="/estimate"
          variant="container"
          className={classes.estimate}
        >
          Free Estimate
        </Button>
      </Grid>
    </Grid>
  );
}

export default CallToAction;
