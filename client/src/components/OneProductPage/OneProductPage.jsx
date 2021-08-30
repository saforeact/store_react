import { Box } from "@material-ui/core";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getOneDevicesAction } from "../../redux/actions/devicesActions";

const OneProductPage = () => {
  const { idProduct } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getOneDevicesAction(idProduct));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return <Box></Box>;
};

export default OneProductPage;
