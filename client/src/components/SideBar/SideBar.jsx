import {
  Box,
  List,
  ListItem,
  ListItemText,
  SwipeableDrawer,
} from "@material-ui/core";
import React from "react";

const SideBar = ({ open, setOpenHendler, ...props }) => {
  return (
    <Box {...props}>
      <SwipeableDrawer
        anchor={"left"}
        open={open}
        onClose={setOpenHendler}
        onOpen={setOpenHendler}
      >
        <List>
          {["All mail", "Trash", "Spam"].map((text, index) => (
            <ListItem button key={text}>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </SwipeableDrawer>
    </Box>
  );
};

export default SideBar;
