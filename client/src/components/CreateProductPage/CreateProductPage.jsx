import { Box, TextField } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  createProductAction,
  editProductAction,
} from "../../redux/actions/adminActions";
import {
  getAllBrands,
  getAllCategory,
  getOneDevicesAction,
} from "../../redux/actions/devicesActions";
import {
  activeDeviceSelector,
  brandsSelector,
  categorysSelector,
} from "../../redux/selectors";
import { showForm } from "../../utils/function";
import { ListBox } from "../common";
import { EmptyForm } from "../UI/forms";
import useStyles from "./CreateProductPageStyle";
import ShowNewFields from "./ShowNewFields/ShowNewFields";

const CreateProductPage = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const brands = useSelector(brandsSelector);
  const categiry = useSelector(categorysSelector);
  const device = useSelector(activeDeviceSelector);

  const { idProduct } = useParams();

  const [product, setProduct] = useState([
    { name: "name", value: "" },
    { name: "brand", value: "" },
    { name: "category", value: "" },
    { name: "price", value: "", type: "number" },
  ]);
  const [description, setDescription] = useState([]);
  const [photos, setPhotos] = useState([]);
  const setPhotosHendler = (e) => {
    setPhotos(e.target.files);
  };

  useEffect(() => {
    if (device._id && device._id.length) {
      setProduct(product.map((p) => ({ ...p, value: device[p.name] })));
      setDescription(device.description);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [device]);

  useEffect(() => {
    dispatch(getAllBrands());
    dispatch(getAllCategory());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (idProduct) {
      dispatch(getOneDevicesAction(idProduct));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [idProduct]);

  const setProductHendler = async (form, e) => {
    if (e.target.name === "category") {
      dispatch(getAllCategory(e.target.value));
    }
    if (e.target.name === "brand") {
      dispatch(getAllBrands(e.target.value));
    }
    setProduct(form);
  };

  const convertForShipment = () => {
    const changeProduct = {};
    product.forEach((item) => {
      Object.assign(changeProduct, { [item.name]: item.value });
    });
    return changeProduct;
  };

  const createProduct = () => {
    dispatch(
      createProductAction({ ...convertForShipment(), description }, photos)
    );
  };
  const editProduct = () => {
    dispatch(
      editProductAction(
        { ...convertForShipment(), description },
        photos,
        idProduct
      )
    );
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
  const addNewField = (e) => {
    if (e.keyCode === 13) {
      if (!description.find((item) => item.name === e.target.value)) {
        setDescription([...description, { name: e.target.value }]);
      }
    }
  };
  return (
    <Box className={classes.wrapper}>
      <Box className={classes.help}>
        <ListBox title="Brands" list={brands} onChange={selectBrand} />
        <ListBox title="Cateries" list={categiry} onChange={selectCategory} />
      </Box>
      <Box className={classes.form}>
        <EmptyForm
          submitText={idProduct ? "Edit Product" : "Create Product"}
          onSubmitHendler={idProduct ? editProduct : createProduct}
        >
          {showForm(product, setProductHendler)}
          <TextField
            type="file"
            inputProps={{ multiple: true }}
            onChange={setPhotosHendler}
          />
        </EmptyForm>
        <ShowNewFields
          list={description}
          onChange={setDescription}
        ></ShowNewFields>
        <TextField placeholder="Create new property" onKeyDown={addNewField} />
      </Box>
    </Box>
  );
};

export default CreateProductPage;
