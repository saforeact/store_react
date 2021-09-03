import { Box } from "@material-ui/core";
import React, { useState } from "react";
import { Counter } from "../UI";
import useStyles from "./BasketItemStyle";
const BasketItem = ({ device }) => {
  const classes = useStyles();
  const [value, setValue] = useState(device.counter);

  const standardTypeOfText = (text = "") =>
    text[0].toLocaleUpperCase() + text.slice(1);
  return (
    <Box className={classes.wrapper}>
      <Box className={classes.subItem}>
        <span className={classes.span}>Image</span>
        <img
          className={classes.img}
          src={process.env.REACT_APP_URL_SERVER + "/" + device.img}
          alt={device.name}
        />
      </Box>
      <Box className={classes.subItem}>
        <span className={classes.span}>Category</span>
        <span className={classes.content}>
          {standardTypeOfText(device.category)}
        </span>
      </Box>
      <Box className={classes.subItem}>
        <span className={classes.span}>Brand</span>
        <span className={classes.content}>
          {standardTypeOfText(device.brand)}
        </span>
      </Box>
      <Box className={classes.subItem}>
        <span className={classes.span}>Counter</span>
        <span className={classes.content}>
          <Counter value={value} setValue={setValue} />
        </span>
      </Box>
      <Box className={classes.subItem}>
        <span className={classes.span}>Name</span>
        <span className={classes.content}>
          {standardTypeOfText(device.name)}
        </span>
      </Box>
    </Box>
  );
};

export default BasketItem;
