import { Box as h3, Button, Container } from "@material-ui/core";
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

  return basket.length ? (
    <Container className={classes.wrapper}>
      {basket.map((device) => (
        <h3 key={device.deviceId}>
          <BasketItem device={device} />
        </h3>
      ))}
      <Button onClick={buyHendler}>Buy</Button>
    </Container>
  ) : (
    <Container className={classes.isEmpty}>
      <h1>Your basket is empty, first add to it what you want to buy</h1>
    </Container>
  );
};

export default Basket;
