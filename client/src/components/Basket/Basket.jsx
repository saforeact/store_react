import { Box, Button, Container } from "@material-ui/core";
import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { getDeviceInBasketSelector } from "../../redux/selectors";
import { payPage } from "../../utils/constants";
import BasketItem from "./BasketItem";
import useStyles from "./BasketStyle";
const Basket = () => {
  const basket = useSelector(getDeviceInBasketSelector);
  const classes = useStyles();
  const history = useHistory();

  const buyHendler = () => {
    history.push(payPage);
  };

  return (
    <Container className={classes.wrapper}>
      {basket.map((device) => (
        <Box key={device.deviceId}>
          <BasketItem device={device} />
        </Box>
      ))}
      <Button onClick={buyHendler}>Buy</Button>

      {/* <MyCheckoutForm /> */}
    </Container>
  );
};

export default Basket;
