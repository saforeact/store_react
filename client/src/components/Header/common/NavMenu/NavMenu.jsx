import { Box, Button } from "@material-ui/core";
import { Search, ShoppingCart } from "@material-ui/icons";
import React from "react";
import { Link, NavLink } from "react-router-dom";
import useStyle from "./NavMenuStyle";
export default function NavMenu() {
  const classes = useStyle();
  return (
    <Box className={classes.nav}>
      <Box className={classes.list}>
        <NavLink activeClassName={classes.activeListItem} to="/shop">
          Магазин
        </NavLink>
        <NavLink activeClassName={classes.activeListItem} to="/personalArea">
          Личный кабинет
        </NavLink>
        <NavLink activeClassName={classes.activeListItem} to="/about">
          About
        </NavLink>
      </Box>
      <Box className={classes.icons}>
        <Button>
          <Link to="cart">
            <ShoppingCart />
          </Link>
        </Button>
        <Button>
          <Search />
        </Button>
      </Box>
    </Box>
  );
}
