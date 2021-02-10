import { createMuiTheme } from "@material-ui/core";
const arcBlue = "#0B72B9";
const arcOrange= "#FFBA60"
const arcGray="#868686"
export default createMuiTheme({
  palette: {
    common: {
      blue: `${arcBlue}`,
      orange: `${arcOrange}`,
    },
    primary: {
      main: `${arcBlue}`,
    },
    secondary: {
      main: `${arcOrange}`,
    },
  },
  typography: {
    tab: {
      fontFamily: "Raleway",
      textTransform: "none",
      fontSize: "1rem",
      fontWeight: 700,
    },
    subtitle2:{
      color:"white",
      fontSize:"1.25rem",
      fontWeight:300
    },
    estimate: {
      fontFamily: "Pacifico",
      fontSize: "1rem",
      textTransform: "none",
      color: "white",
    },
    h2: {
      fontFamily: "Raleway",
      fontSize: "2.5rem",
      color: arcBlue,
      fontWeight: 700,
      lineHeight: 1.5,
    },
    h3: {
      fontFamily: "Pacifico",
      fontSize: "2.5rem",
      color: arcBlue,
    },
    h4: {
      fontFamily: "Raleway",
      fontSize: "1.75rem",
      color: arcBlue,
      fontWeight: 700,
    },
    subtitle1: {
      fontSize: "1.25rem",
      fontWeight: 300,
      color: arcGray,
    },
    learnButton: {
      borderColor: arcBlue,
      borderWidth: 2,
      textTransform: "none",
      color: arcBlue,
      borderRadius: 50,
      fontFamily: "Roboto",
      fontWeight: "bold",
    },
  },
});