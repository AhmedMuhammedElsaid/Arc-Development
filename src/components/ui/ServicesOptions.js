import React from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Grow from "@material-ui/core/Grow";
import Paper from "@material-ui/core/Paper";
import Popper from "@material-ui/core/Popper";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core";
import { options } from "./Header";

const useStyles = makeStyles((theme) => ({
  menu: {
    backgroundColor: theme.palette.common.blue,
    color: "white",
    borderRadius: "0",
  },
  menuItem: {
    ...theme?.palette?.typography?.tab,
    opacity: ".7",
    // marginTop:'-2rem',
    "&:hover": { opacity: "1" },
  },
}));
export default function SplitButton({
  setValue,
  value,
  setSelectedIndex,
  selectedIndex,
}) {
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);
  const handleMenuItemClick = (event, index) => {
    console.log(index);
    setSelectedIndex(index);
    setOpen(false);
  };

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }
    setOpen(false);
  };
  const classes = useStyles();

  return (
    <>
      <ButtonGroup
        variant="contained"
        color="primary"
        ref={anchorRef}
        aria-label="split button"
        style={{ opacity: 0, zIndex: "10" }}
      >
        <Button
          color="primary"
          size="small"
          aria-controls={open ? "split-button-menu" : undefined}
          aria-expanded={open ? "true" : undefined}
          aria-label="select merge strategy"
          aria-haspopup="menu"
          onClick={handleToggle}
          style={{ width: "111px", height: "40px" }}
        >
          <ArrowDropDownIcon />
        </Button>
      </ButtonGroup>
      <Popper
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        transition
        disablePortal
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin:
                placement === "bottom" ? "center top" : "center bottom",
            }}
          >
            <Paper>
              <ClickAwayListener  onClickAway={handleClose}>
                <MenuList   className={classes.menu} id="split-button-menu">
                  {options.map((option, index) => (
                    <MenuItem
                      component={Link}
                      to={option.path}
                      key={index}
                      
                      className={classes.menuItem}
                      selected={index === selectedIndex && value === 1}
                      onClick={(event) => {
                        handleMenuItemClick(event, index);
                        setValue(1);
                        handleClose(event);
                      }}
                    >
                      {option.name}
                    </MenuItem>
                  ))}
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </>
  );
}
