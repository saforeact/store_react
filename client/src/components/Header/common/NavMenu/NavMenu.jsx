import { Box, Button } from "@material-ui/core";
import { Search, ShoppingCart } from "@material-ui/icons";
import React from "react";
import { Link, NavLink } from "react-router-dom";
import {
  aboutPage,
  cartPage,
  personalAreaPage,
  shopPage,
} from "../../../../utils/constants";
import useStyle from "./NavMenuStyle";
export default function NavMenu() {
  const classes = useStyle();
  const navMenu = [
    { text: "Магазин", href: shopPage },
    { text: "Личный кабинет", href: personalAreaPage },
    { text: "О нас", href: aboutPage },
  ];
  return (
    <Box className={classes.nav}>
      <Box className={classes.list}>
        {navMenu.map((item, idx) => (
          <NavLink
            activeClassName={classes.activeListItem}
            to={item.href}
            key={idx}
          >
            {item.text}
          </NavLink>
        ))}
      </Box>
      <Box className={classes.icons}>
        <Button>
          <Link to={cartPage}>
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
