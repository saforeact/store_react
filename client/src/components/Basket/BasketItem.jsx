import { Box, Button } from "@material-ui/core";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import {
  changeCounterInDeviceAction,
  removeItemFromBasketAction,
} from "../../redux/actions/basketActions";
import { Delete } from "@material-ui/icons";
import { Counter } from "../UI";
import useStyles from "./BasketItemStyle";
const BasketItem = ({ device }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [value, setValue] = useState(device.counter);
  const standardTypeOfText = (text = "") =>
    text[0].toLocaleUpperCase() + text.slice(1);

  let timer = useRef(null);
  useEffect(() => {
    if (timer) {
      clearTimeout(timer.current);
    }
    const sendNewData = () => {
      dispatch(changeCounterInDeviceAction(device.deviceId, value));
      clearTimeout(timer.current);
    };
    if (value !== device.counter) {
      timer.current = setTimeout(sendNewData, 500);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);
  const deleteItemFromBasket = () => {
    dispatch(removeItemFromBasketAction(device.deviceId));
  };
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
      <Box>
        <Button onClick={deleteItemFromBasket}>
          <Delete />
        </Button>
      </Box>
    </Box>
  );
};

export default BasketItem;
