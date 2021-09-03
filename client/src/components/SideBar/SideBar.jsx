import {
  Box,
  List,
  ListItem,
  ListItemText,
  SwipeableDrawer,
} from "@material-ui/core";
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { userSelector } from "../../redux/selectors";
import {
  createProduct,
  profilePage,
  settingPage,
  shopPage,
  userRolesPage,
} from "../../utils/constants";
import useStyle from "./SideBarStyle";

const getRolesMenu = (role) => {
  switch (role) {
    case "ADMIN":
      return adminMenu;
    case "USER":
      return userMenu;
    default:
      return notAuthMenu;
  }
};
const notAuthMenu = [{ text: "Shop", href: shopPage }];
const userMenu = [
  { text: "Profile", href: profilePage },
  ...notAuthMenu,
  { text: "Setting", href: settingPage },
];
const adminMenu = [
  ...userMenu,
  { text: "Users Role", href: userRolesPage },
  { text: "Create product", href: createProduct },
];

const SideBar = ({ open, setOpenHendler, className, ...props }) => {
  const classes = useStyle();
  const { data } = useSelector(userSelector);

  return (
    <Box {...props} className={classes.wrapper}>
      <SwipeableDrawer
        anchor={"left"}
        open={open}
        onClose={setOpenHendler}
        onOpen={setOpenHendler}
      >
        <List className={className}>
          {getRolesMenu(data.role).map((item) => (
            <Link
              to={item.href}
              className={classes.listItem}
              key={item.text}
              onClick={setOpenHendler}
            >
              <ListItem button>
                <ListItemText primary={item.text} />
              </ListItem>
            </Link>
          ))}
        </List>
      </SwipeableDrawer>
    </Box>
  );
};

export default SideBar;
