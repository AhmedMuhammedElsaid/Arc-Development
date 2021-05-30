import { Grid, IconButton, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import backArrow from "../assets/backArrow.svg";
import forwardArrow from "../assets/forwardArrow.svg";
import lightbulb from "../assets/bulb.svg";
import cash from "../assets/cash.svg";
import stopwatch from "../assets/stopwatch.svg";
const useStyles = makeStyles((theme) => ({
  heading: {
    maxWidth: "40em",
    margin: "4rem",
  },
  arrowContainer: {
    marginTop: ".5em",
  },
  mainContainer: {
    paddingLeft: "5em",
    paddingRight: "5em",
    paddingTop: "2em",
    paddingBottom: "10em",
  },
}));
const CustomSoftwares = () => {
  const classes = useStyles();
  return (
    <Grid container direction="column" className={classes.mainContainer}>
      <Grid item container direction="row">
        <Grid
          item
          classesName={classes.arrowContainer}
          style={{ marginRight: "1em", marginLeft: "-3.5em" }}
        >
          <IconButton
            style={{ backgroundColor: "transparent" }}
            component={Link}
            to="/services"
          >
            <img src={backArrow} alt="back arrow" />
          </IconButton>
        </Grid>
        <Grid item container direction="column" className={classes.heading}>
          <Grid item>
            <Typography variant="h2">Custom Software Development</Typography>
          </Grid>
          <Grid item>
            <Typography variant="body1" paragraph>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters,
            </Typography>
            <Typography variant="body1" paragraph>
              their default model text, and a search for 'lorem ipsum' will
              uncover many web sites still in their infancy. Various versions
              have evolved over the years, sometimes by accident, sometimes on
            </Typography>
            <Typography variant="body1" paragraph>
              as opposed to using 'Content here, content here', making it look
              like readable English. Many desktop publishing packages and web
              page editors now use Lorem Ipsum as purpose
            </Typography>
          </Grid>
        </Grid>
        <Grid item>
          <IconButton
            style={{ backgroundColor: "transparent" }}
            component={Link}
            to="/mobileapps"
          >
            <img src={forwardArrow} alt="forward arrow" />
          </IconButton>
        </Grid>
      </Grid>
      <Grid item container direction="row" justify="center"
      style={{marginTop:"15em",marginBottom:"20em"}}
      >
        <Grid item container direction="column"  md style={{maxWidth:"40em"}} alignItems="center">
          <Grid item>
            <Typography variant="h4">Save Energy</Typography>
          </Grid>
          <Grid item>
            <img src={lightbulb} alt="lightbulb" />
          </Grid>
        </Grid>
        <Grid item container direction="column" md style={{maxWidth:"40em"}} alignItems="center">
          <Grid item>
            <Typography variant="h4">Save Time</Typography>
          </Grid>
          <Grid item>
            <img src={stopwatch} alt="stopwatch" />
          </Grid>
        </Grid>
        <Grid item container direction="column" md style={{maxWidth:"40em"}} alignItems="center">
          <Grid item>
            <Typography variant="h4">Save Money</Typography>
          </Grid>
          <Grid item>
            <img src={cash} alt="cash" />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default CustomSoftwares;
