import { Avatar, Box, Button, TextField } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  editUserAction,
  editUserPhotoAction,
} from "../../redux/actions/userActions";
import { userSelector } from "../../redux/selectors";
import useStyle from "./SettingPageStyle";
import { isEmpty } from "lodash";
import { showForm } from "../../utils/function";
import { EmptyForm } from "../UI/forms";
const SettingPage = () => {
  const classes = useStyle();
  const dispatch = useDispatch();
  const { data } = useSelector(userSelector);
  const { photo, role, ...inform } = data;

  const [newPhoto, setNewPhoto] = useState({
    file: null,
    url: null,
  });
  const setNewPhotoHendler = (e) => {
    setNewPhoto({
      file: e.target.files[0],
      url: URL.createObjectURL(e.target.files[0]),
    });
  };

  const [form, setForm] = useState({
    name: "",
    surname: "",
    email: "",
    ...inform,
  });
  const setFormHendler = (form, e) => {
    setForm(form);
  };
  useEffect(
    () => {
      if (isEmpty(data)) {
        const clearForm = {};
        for (let key in form) {
          Object.assign(clearForm, { [key]: "" });
        }
        return setForm(clearForm);
      }
      setForm({ ...form, ...inform });
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [data]
  );
  const saveInfornHendler = () => {
    dispatch(editUserAction(form));
  };

  const savePhotoHendler = () => {
    if (newPhoto.file) {
      dispatch(editUserPhotoAction(newPhoto.file));
    }
  };

  return (
    <Box className={classes.wrapper}>
      <Box className={classes.photo}>
        <img
          src={newPhoto.url || data.photo}
          alt="avatar"
          className={classes.img}
        />
        <Avatar src={newPhoto.url || data.photo} />
        <TextField type="file" onChange={setNewPhotoHendler} />
        <Button onClick={savePhotoHendler}>Save Photo</Button>
      </Box>
      <Box className={classes.inform}>
        <EmptyForm submitText="Save Inform" onSubmitHendler={saveInfornHendler}>
          <h1>Information about you</h1>
          {showForm(form, setFormHendler)}
        </EmptyForm>
      </Box>
    </Box>
  );
};

export default SettingPage;
