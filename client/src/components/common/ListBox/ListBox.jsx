import { Box } from "@material-ui/core";
import React from "react";
import userStyles from "./ListBoxStyle";
const ListBox = ({ title }) => {
  const classes = userStyles();
  return (
    <Box className={classes.wrapper}>
      <h2>{title}</h2>
    </Box>
  );
};

export default ListBox;
