import { Grid, IconButton, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import backArrow from "../assets/backArrow.svg";
import forwardArrow from "../assets/forwardArrow.svg";


const useStyles=makeStyles(theme=>({
heading:{
maxWidth:"40em",
margin:"4rem"
},
arrowContainer:{
    marginTop:'.5em'
}
}))
const CustomSoftwares = () => {
    const classes=useStyles();
  return (
    <Grid container direction="column" className={classes.heading}>
      <Grid item container direction="row">
        <Grid item classesName={classes.arrowContainer}>
          <IconButton style={{ backgroundColor: "transparent" }}>
            <img src={backArrow} alt="back arrow" />
          </IconButton>
        </Grid>
        <Grid item container direction="column">
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
          <IconButton style={{ backgroundColor: "transparent" }}>
            <img src={forwardArrow} alt="forward arrow" />
          </IconButton>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default CustomSoftwares;
