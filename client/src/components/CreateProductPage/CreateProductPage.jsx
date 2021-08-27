import { Box, TextField } from "@material-ui/core";
import React, { useState } from "react";
import { showForm } from "../../utils/function";
import { ListBox } from "../common";
import { EmptyForm } from "../UI/forms";
import useStyles from "./CreateProductPageStyle";
const CreateProductPage = () => {
  const classes = useStyles();
  const [product, setProduct] = useState({
    name: "",
    brand: "",
    categiry: "",
    price: "",
  });
  const [photo, setPhoto] = useState([]);
  const setPhotoHendler = (e) => {
    setPhoto(e.target.files);
  };
  const createProduct = () => {
    console.log(`product`, product);
  };
  return (
    <Box className={classes.wrapper}>
      <Box className={classes.help}>
        <ListBox title="Brands" />
        <ListBox title="Cateries" />
      </Box>
      <Box className={classes.form}>
        <EmptyForm submitText="Create Product" onSubmitHendler={createProduct}>
          {showForm(product, setProduct)}
          <TextField
            type="file"
            inputProps={{ multiple: true }}
            onChange={setPhotoHendler}
          ></TextField>
        </EmptyForm>
      </Box>
    </Box>
  );
};

export default CreateProductPage;
