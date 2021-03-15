import {
  AppBar,
  Button,
  IconButton,
  List,
  ListItem,
  ListItemText,
  makeStyles,
  Tab,
  Tabs,
  Toolbar,
  Typography,
  useMediaQuery,
  useScrollTrigger,
  useTheme,
} from "@material-ui/core";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import React, { useEffect, useState } from "react";
import PropTypes from "proptypes";
import Logo from "../../assets/logo.svg";
import { Link } from "react-router-dom";
import MenuIcon from "@material-ui/icons/Menu";
import ServicesOpts from "./ServicesOptions";
const useStyles = makeStyles((theme) => {
  console.log("theme", theme);
  return {
    toolbarMargin: {
      ...theme.mixins.toolbar,
      marginottom: "3em",
      [theme.breakpoints.down("md")]: {
        marginBottom: "2em",
      },
      [theme.breakpoints.down("xs")]: {
        marginBottom: "1.25em",
      },
    },
    logo: {
      height: "8em",
      [theme.breakpoints.down("md")]: {
        height: "7em",
      },
      [theme.breakpoints.down("xs")]: {
        height: "5.5em",
      },
    },
    tabContainer: {
      marginLeft: "auto",
      position: "relative",
    },
    optionsStyle: {
      position: "absolute",
      right: "38rem",
      top: "30px",
      [theme.breakpoints.down("md")]: {
        right: "33rem",
      },
      [theme.breakpoints.down("sm")]: {
        right: "12rem",
      },
    },
    tabs: {
      ...theme?.typography?.tab,
      minWidth: 10,
      marginLeft: "25px",
    },
    logoContainer: {
      padding: 0,
      "&:hover": {
        backgroundColor: "transparent",
      },
    },
    button: {
      ...theme?.typography?.estimate,
      borderRadius: "50px",
      marginLeft: "50px",
      marginRight: "25px",
      height: "45px",
      color: "white",
      "&:hover": {
        backgroundColor: theme.palette.secondary.light,
      },
    },
    drawerIconContainer: {
      marginLeft: "auto",
      "&:hover": {
        backgroundColor: "transparent",
      },
    },
    drawerIcon: {
      height: "50px",
    },
    drawer: {
      backgroundColor: theme.palette.common.blue,
    },
    drawerItem: {
      ...theme?.typography?.tab,
      color: "white",
      opacity: 0.7,
    },
    drawerItemEstimate: {
      backgroundColor: theme.palette.common.orange,
    },
    drawerItemSelected: {
      "& .MuiListItemText-root": {
        opacity: 1,
      },
    },
    appbar: {
      zIndex: theme.zIndex.modal + 1,
    },
  };
});
export const options = [
  { path: "/services", name: " Services", selectedIndex: 0, activeIndex: 1 },
  {
    path: "/customsoftware",
    name: " Custom Software Development",
    activeIndex: 1,
    selectedIndex: 1,
  },
  {
    path: "/mobileapps",
    name: " Custom Software Development",
    activeIndex: 1,
    selectedIndex: 2,
  },
  {
    path: "/website",
    name: " Website Development",
    activeIndex: 1,
    selectedIndex: 3,
  },
];
export default function Header(props) {
  const classes = useStyles();
  const [value, setValue] = useState(0);
  const routes = [
    { name: "Home", link: "/", activeIndex: 0 },
    { name: "Services", link: "/services", activeIndex: 1 },
    { name: " Revolution", link: "/revolution", activeIndex: 2 },
    { name: "About Us", link: "/about", activeIndex: 3 },
    { name: "Contact Us", link: "/contact", activeIndex: 4 },
  ];
  const [selectedIndex, setSelectedIndex] = useState(0);
  const handleChange = (e, value) => {
    setValue(value);
  };
  useEffect(() => {
    [...options, ...routes].forEach((route) => {
      switch (window.location.pathname) {
        case `${route.link}`:
          if (value !== route.activeIndex) {
            setValue(route.activeIndex);
            if (route.selectedIndex && route.selectedIndex !== selectedIndex) {
              setSelectedIndex(route.selectedIndex);
            }
          }
          break;
        case "/estimate":
          setValue(5);
          break;
        default:
          break;
      }
    });
  }, [value, selectedIndex]);

  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);
  const [openDrawer, setOpenDrawer] = useState(false);
  const drawer = (
    <>
      <SwipeableDrawer
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        onOpen={() => setOpenDrawer(true)}
        disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
        classes={{ paper: classes.drawer }}
      >
        <div className={classes.toolbarMargin} />
        <List disablePadding>
          {routes.map((route) => (
            <ListItem
              key={`${route}${route.activeIndex}`}
              onClick={() => {
                setOpenDrawer(false);
                setValue(route.activeIndex);
              }}
              selected={value === route.activeIndex}
              divider
              button
              component={Link}
              classes={{ selected: classes.drawerItemSelected }}
              to={route.link}
            >
              <ListItemText className={classes.drawerItem} disableTypography>
                {route.name}
              </ListItemText>
            </ListItem>
          ))}{" "}
          <ListItem
            divider
            selected={value === 5}
            onClick={() => {
              setOpenDrawer(false);
              setValue(5);
            }}
            button
            component={Link}
            classes={{
              root: classes.drawerItemEstimate,
              selected: classes.drawerItemSelected,
            }}
            to="/estimate"
          >
            <ListItemText className={classes.drawerItem} disableTypography>
              Free Estimate
            </ListItemText>
          </ListItem>
        </List>
      </SwipeableDrawer>
      <IconButton
        className={classes.drawerIconContainer}
        size="medium"
        onClick={() => setOpenDrawer(!openDrawer)}
        disableRipple
      >
        <MenuIcon className={classes.drawerIcon} fontSize="large" />
      </IconButton>
    </>
  );
  const tabs = (
    <>
      <Tabs
        value={value}
        onChange={handleChange}
        className={classes.tabContainer}
        indicatorColor="primary"
      >
        {routes.map((route, index) => (
          <Tab
            key={`${route}${index}`}
            label={route.name}
            component={Link}
            to={route.link}
            className={classes.tabs}
          />
        ))}
      </Tabs>

      <Typography component="div" className={classes.optionsStyle}>
        <ServicesOpts
          setValue={setValue}
          selectedIndex={selectedIndex}
          setSelectedIndex={setSelectedIndex}
          value={value}
        />
      </Typography>
      <Button
        component={Link}
        to="/estimate"
        className={classes.button}
        variant="contained"
        onClick={() => setValue(5)}
        color="secondary"
      >
        {" "}
        Free Estimate
      </Button>
    </>
  );
  function ElevationScroll(props) {
    const { children } = props;
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({
      disableHysteresis: true,
      threshold: 0,
    });
    return React.cloneElement(children, {
      elevation: trigger ? 4 : 0,
    });
  }

  ElevationScroll.propTypes = {
    children: PropTypes.element.isRequired,
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
  };

  return (
    <>
      <ElevationScroll>
        <AppBar position="fixed" color="primary" className={classes.appbar}>
          <Toolbar disableGutters>
            <Button
              onClick={() => setValue(0)}
              disableRipple
              component={Link}
              to="/"
              className={classes.logoContainer}
            >
              <img alt="company Logo" src={Logo} className={classes.logo} />
            </Button>
            {matches ? drawer : tabs}
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolbarMargin} />
    </>
  );
}
