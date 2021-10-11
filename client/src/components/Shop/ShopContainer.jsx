import { LinearProgress } from "@material-ui/core";
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
  devicesLoadingSelector,
  devicesSelector,
} from "../../redux/selectors";
import { deviceLink } from "../../utils/constants";
import Shop from "./Shop";
import ShopFilter from "./ShopFilter";

const ShopContainer = () => {
  const dispatch = useDispatch();
  const devices = useSelector(devicesSelector);
  const brands = useSelector(brandsSelector);
  const category = useSelector(categorysSelector);
  const loading = useSelector(devicesLoadingSelector);
  const history = useHistory();
  const searchInput = useRef();

  const [selectBrand, setSelectBrand] = useState("None");
  const [selectCategory, setSelectCategory] = useState("None");
  const [showSearch, setShowSearch] = useState(false);
  const [valueSearch, setValueSearch] = useState("");
  let timer = useRef();
  useEffect(() => {
    if (
      valueSearch !== "" ||
      selectBrand !== "None" ||
      selectCategory !== "None"
    ) {
      clearTimeout(timer.current);
      timer.current = setTimeout(
        () => executeSearch(valueSearch, selectBrand, selectCategory),
        1000
      );
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
  const goToDeviceID = (_id) => {
    history.push(deviceLink + _id);
  };
  const executeSearch = (search = "", brand = "", category = "") => {
    dispatch(getDevicesAfterSearchAction({ search, brand, category }));
  };

  const clearFilters = () => {
    if (
      selectBrand !== "None" ||
      selectCategory !== "None" ||
      valueSearch.length
    ) {
      setSelectCategory("None");
      setSelectBrand("None");
      setValueSearch("");
      executeSearch();
    }
  };
  return (
    <>
      <ShopFilter
        showSearch={showSearch}
        searchInput={searchInput}
        valueSearch={valueSearch}
        setValueSearchHendler={setValueSearchHendler}
        showSearchHendler={showSearchHendler}
        hideSearchHendler={hideSearchHendler}
        selectCategory={selectCategory}
        setSelectCategoryHendler={setSelectCategoryHendler}
        category={category}
        selectBrand={selectBrand}
        setSelectBrandHendler={setSelectBrandHendler}
        brands={brands}
        clearFilters={clearFilters}
        loading={loading}
      />
      {!loading ? (
        <Shop devices={devices} goToDeviceID={goToDeviceID} />
      ) : (
        <LinearProgress />
      )}
    </>
  );
};

export default ShopContainer;
