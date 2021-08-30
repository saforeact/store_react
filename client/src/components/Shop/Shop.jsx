import { Box, Button, Input } from "@material-ui/core";
import { Search } from "@material-ui/icons";
import classNames from "classnames";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import {
  getAllDevicesAction,
  getDevicesAfterSearchAction,
} from "../../redux/actions/devicesActions";
import { devicesSelector } from "../../redux/selectors";
import { deviceLink } from "../../utils/constants";
import useStyles from "./ShopStyle";

const Shop = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const devices = useSelector(devicesSelector);
  const history = useHistory();
  const searchInput = useRef();

  const [showSearch, setShowSearch] = useState(false);
  const [valueSearch, setValueSearch] = useState("");
  const setValueSearchHendler = (e) => {
    setValueSearch(e.target.value);
  };

  useEffect(() => {
    searchInput.current.addEventListener("keydown", (e) => {
      switch (e.keyCode) {
        case 13:
          executeSearch(e.target.value);
          break;
        case 27:
          hideSearchHendler();
          break;
        default:
          return null;
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    dispatch(getAllDevicesAction());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const showSearchHendler = () => {
    searchInput.current.focus();
    setShowSearch(true);
  };

  const hideSearchHendler = () => {
    setShowSearch(false);
  };

  const executeSearch = (search) => {
    dispatch(getDevicesAfterSearchAction(search));
  };
  return (
    <Box className={classes.wrapper}>
      <Box className={classes.filters}>
        <Input
          className={classNames(
            classes.search,
            showSearch ? classes.searchActive : classes.searchDis
          )}
          inputProps={{ ref: searchInput }}
          placeholder="Search"
          value={valueSearch}
          onChange={setValueSearchHendler}
          endAdornment={
            showSearch ? null : <Search onMouseEnter={showSearchHendler} />
          }
          onBlur={hideSearchHendler}
        />
      </Box>
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
              <Button
                onClick={() => {
                  history.push(deviceLink + device._id);
                }}
              >
                Details
              </Button>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Shop;
