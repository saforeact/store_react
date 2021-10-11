import { Box, Button } from "@material-ui/core";
import React from "react";
import useStyles from "./ShopStyle";

const Shop = ({ devices, goToDeviceID }) => {
  const classes = useStyles();

  return (
    <Box className={classes.wrapper}>
      <Box className={classes.shop}>
        {devices.map((device) => (
          <Box className={classes.card} key={device._id}>
            <img
              src={`${process.env.REACT_APP_URL_SERVER}/${device.img[0]}`}
              alt={device.name}
            />
            <h3>{`${device.brand} ${device.name}`}</h3>
            <Box className={classes.controle}>
              <h4>{`Price: ${device.price}`}</h4>
              <Button onClick={() => goToDeviceID(device._id)}>Details</Button>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Shop;
