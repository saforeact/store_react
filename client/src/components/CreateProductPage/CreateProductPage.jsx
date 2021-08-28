import { Box, TextField } from "@material-ui/core";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  createProductAction,
  getAllBrands,
  getAllCategory,
} from "../../redux/actions/adminActions";
import { brandsSelector, categorysSelector } from "../../redux/selectors";
import { showForm } from "../../utils/function";
import { ListBox } from "../common";
import { EmptyForm } from "../UI/forms";
import useStyles from "./CreateProductPageStyle";
let cancelTokenBrand;
let cancelTokenType;
const CreateProductPage = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const brands = useSelector(brandsSelector);
  const categiry = useSelector(categorysSelector);

  const [product, setProduct] = useState([
    { name: "name", value: "" },
    { name: "brand", value: "" },
    { name: "category", value: "" },
    { name: "price", value: "", type: "number" },
  ]);
  const [photos, setPhotos] = useState([]);

  const setPhotosHendler = (e) => {
    setPhotos(e.target.files);
  };

  useEffect(() => {
    dispatch(getAllBrands());
    dispatch(getAllCategory());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const setProductHendler = async (form, e) => {
    if (e.target.name === "category") {
      cancelTokenType = cancelTokenType
        ? cancelTokenType.cancel("")
        : new axios.CancelToken.source();
      dispatch(getAllCategory(e.target.value, cancelTokenType));
    }

    if (e.target.name === "brand") {
      cancelTokenBrand = cancelTokenBrand
        ? cancelTokenBrand.cancel("")
        : new axios.CancelToken.source();
      dispatch(getAllBrands(e.target.value, cancelTokenBrand));
    }
    setProduct(form);
  };
  const createProduct = () => {
    const changeProduct = {};
    product.forEach((item) => {
      Object.assign(changeProduct, { [item.name]: item.value });
    });
    dispatch(createProductAction(changeProduct, photos));
  };

  const selectBrand = (brand) => {
    setProduct(
      product.map((i) => (i.name === "brand" ? { ...i, value: brand } : i))
    );
  };
  const selectCategory = (category) => {
    setProduct(
      product.map((i) =>
        i.name === "category" ? { ...i, value: category } : i
      )
    );
  };

  return (
    <Box className={classes.wrapper}>
      <Box className={classes.help}>
        <ListBox title="Brands" list={brands} onChange={selectBrand} />
        <ListBox title="Cateries" list={categiry} onChange={selectCategory} />
      </Box>
      <Box className={classes.form}>
        <EmptyForm submitText="Create Product" onSubmitHendler={createProduct}>
          {showForm(product, setProductHendler)}
          <TextField
            type="file"
            inputProps={{ multiple: true }}
            onChange={setPhotosHendler}
          ></TextField>
        </EmptyForm>
      </Box>
    </Box>
  );
};

export default CreateProductPage;
