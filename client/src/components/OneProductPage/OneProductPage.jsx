import { Box, Button, Container, LinearProgress } from "@material-ui/core";
import { Edit } from "@material-ui/icons";
import { isEmpty } from "lodash";
import React, { useEffect, useState } from "react";
import ImageGallery from "react-image-gallery";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { addDeviceToBasketBasketAction } from "../../redux/actions/basketActions";
import {
  getOneDevicesAction,
  setDevicesAction,
} from "../../redux/actions/devicesActions";
import {
  activeDeviceSelector,
  devicesLoadingSelector,
  isAdminSelector,
  isAuthSelector,
} from "../../redux/selectors";
import { editProductLink } from "../../utils/constants";
import { Counter } from "../UI";
import useStyles from "./OneProductPageStyle";
const OneProductPage = () => {
  const classes = useStyles();
  const { idProduct } = useParams();
  const dispatch = useDispatch();
  const device = useSelector(activeDeviceSelector);
  const isAdmin = useSelector(isAdminSelector);
  const isAuth = useSelector(isAuthSelector);
  const loading = useSelector(devicesLoadingSelector);
  const [images, setImages] = useState([]);
  const [counter, setCounter] = useState(1);
  const history = useHistory();
  const showDescriptio = () => {
    if (device && device.description) {
      const descriptionJSX = [];
      const { description } = device;
      description.forEach((item) => {
        descriptionJSX.push(<h2 key={item.name}>{item.name}</h2>);
        const { specifications } = item;
        for (let key in specifications) {
          descriptionJSX.push(
            <Box className={classes.specifications} key={key}>
              <h4>{key}:</h4>
              <h4>{specifications[key]}</h4>
            </Box>
          );
        }
      });

      return descriptionJSX;
    }
  };
  useEffect(() => {
    if (!isEmpty(device) && device.img.length) {
      setImages(
        device.img.map((image) => ({
          original: process.env.REACT_APP_URL_SERVER + "/" + image,
          thumbnail: process.env.REACT_APP_URL_SERVER + "/" + image,
          originalHeight: 500,
        }))
      );
    }
  }, [device]);
  useEffect(() => {
    dispatch(getOneDevicesAction(idProduct));
    return () => {
      dispatch(setDevicesAction({ activeDevice: {} }));
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const addDeviceToBasket = () => {
    dispatch(addDeviceToBasketBasketAction({ idProduct, counter }));
  };
  return !loading ? (
    <Container className={classes.wrapper}>
      <Box>
        <ImageGallery
          items={images}
          thumbnailPosition="left"
          additionalClass={classes.gallery}
          showFullscreenButton={false}
          showPlayButton={false}
        />
      </Box>
      <Box className={classes.content}>
        <Box className={classes.title}>
          <h1>{`${device.brand} ${device.name}`}</h1>
          {isAdmin && (
            <Button
              onClick={() => {
                history.push(`${editProductLink}/${idProduct}`);
              }}
            >
              <Edit />
            </Button>
          )}
        </Box>
        <Box className={classes.descriptioList}>{showDescriptio()}</Box>
        {isAuth && (
          <Box className={classes.buy}>
            <Counter value={counter} setValue={setCounter} />
            <Button onClick={addDeviceToBasket}>Add to Basket</Button>
          </Box>
        )}
      </Box>
    </Container>
  ) : (
    <LinearProgress />
  );
};

export default OneProductPage;
