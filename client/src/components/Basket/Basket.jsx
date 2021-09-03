import { Box, Button, Container } from "@material-ui/core";
import React from "react";
import { useSelector } from "react-redux";
import { getDeviceInBasketSelector } from "../../redux/selectors";
import BasketItem from "./BasketItem";
import useStyles from "./BasketStyle";
const Basket = () => {
  const basket = useSelector(getDeviceInBasketSelector);
  const classes = useStyles();
  return (
    <Container className={classes.wrapper}>
      {basket.map((device) => (
        <Box key={device.deviceId}>
          <BasketItem device={device} />
        </Box>
      ))}
      <Button>Buy</Button>
    </Container>
  );
};

export default Basket;
