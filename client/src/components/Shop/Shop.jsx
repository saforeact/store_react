import { Box, Button, Input, MenuItem, Select } from "@material-ui/core";
import { Clear, Search } from "@material-ui/icons";
import classNames from "classnames";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import {
  getAllBrands,
  getAllCategory,
  getAllDevicesAction,
  getDevicesAfterSearchAction,
} from "../../redux/actions/devicesActions";
import {
  brandsSelector,
  categorysSelector,
  devicesSelector,
} from "../../redux/selectors";
import { deviceLink } from "../../utils/constants";
import useStyles from "./ShopStyle";

const Shop = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const devices = useSelector(devicesSelector);
  const brands = useSelector(brandsSelector);
  const category = useSelector(categorysSelector);
  const history = useHistory();
  const searchInput = useRef();

  const [selectBrand, setSelectBrand] = useState("None");
  const [selectCategory, setSelectCategory] = useState("None");
  const [showSearch, setShowSearch] = useState(false);
  const [valueSearch, setValueSearch] = useState("");

  useEffect(() => {
    if (
      valueSearch !== "" ||
      selectBrand !== "None" ||
      selectCategory !== "None"
    ) {
      executeSearch(valueSearch, selectBrand, selectCategory);
    } else {
      clearFilters();
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [valueSearch, selectBrand, selectCategory]);

  useEffect(() => {
    dispatch(getAllBrands());
    dispatch(getAllCategory());
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
  const setSelectBrandHendler = (e) => {
    setSelectBrand(e.target.value);
  };
  const setSelectCategoryHendler = (e) => {
    setSelectCategory(e.target.value);
  };
  const setValueSearchHendler = (e) => {
    setValueSearch(e.target.value);
  };

  const executeSearch = (search = "", brand = "", category = "") => {
    dispatch(getDevicesAfterSearchAction({ search, brand, category }));
  };

  const clearFilters = () => {
    setSelectCategory("None");
    setSelectBrand("None");
    setValueSearch("");
    executeSearch();
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
        <Box className={classes.filters}>
          <Box className={classes.select}>
            <label>Filter by category</label>
            <Select value={selectCategory} onChange={setSelectCategoryHendler}>
              <MenuItem value="None">None</MenuItem>
              {category.map((item) => (
                <MenuItem key={item} value={item}>
                  {item}
                </MenuItem>
              ))}
            </Select>
          </Box>
          <Box className={classes.select}>
            <label>Filter by brand</label>
            <Select value={selectBrand} onChange={setSelectBrandHendler}>
              <MenuItem value="None">None</MenuItem>
              {brands.map((item) => (
                <MenuItem key={item} value={item}>
                  {item}
                </MenuItem>
              ))}
            </Select>
          </Box>
          <Button onClick={clearFilters} size="small">
            Clear
            <Clear />
          </Button>
        </Box>
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
