import { Box, Button, Container } from "@material-ui/core";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { buyDevicesAction } from "../../redux/actions/basketActions";
import { getDeviceInBasketSelector } from "../../redux/selectors";
import BasketItem from "./BasketItem";
import useStyles from "./BasketStyle";
const Basket = () => {
  const basket = useSelector(getDeviceInBasketSelector);
  const classes = useStyles();
  const dispatch = useDispatch();

  const buyHendler = () => {
    dispatch(buyDevicesAction());
  };

  return (
    <Container className={classes.wrapper}>
      {basket.map((device) => (
        <Box key={device.deviceId}>
          <BasketItem device={device} />
        </Box>
      ))}
      <Button onClick={buyHendler}>Buy</Button>
    </Container>
  );
};

export default Basket;
