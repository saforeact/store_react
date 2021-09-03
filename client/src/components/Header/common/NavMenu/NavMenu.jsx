import { Badge, Box, Button } from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";
import React from "react";
import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import {
  getLengthDeviceInBasketSelector,
  isAuthSelector,
} from "../../../../redux/selectors";
import {
  aboutPage,
  cartPage,
  personalAreaPage,
  shopPage,
} from "../../../../utils/constants";
import useStyle from "./NavMenuStyle";
export default function NavMenu() {
  const classes = useStyle();
  const basketLength = useSelector(getLengthDeviceInBasketSelector);
  const isAuth = useSelector(isAuthSelector);

  const navMenu = isAuth
    ? [
        { text: "Магазин", href: shopPage },
        { text: "Личный кабинет", href: personalAreaPage },
        { text: "О нас", href: aboutPage },
      ]
    : [
        { text: "Магазин", href: shopPage },
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
      {isAuth && (
        <Box className={classes.icons}>
          <Link to={cartPage}>
            <Button>
              <Badge badgeContent={basketLength} color="primary">
                <ShoppingCart />
              </Badge>
            </Button>
          </Link>
        </Box>
      )}
    </Box>
  );
}
