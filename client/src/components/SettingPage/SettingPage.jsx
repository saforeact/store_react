import { Avatar, Box, Button, TextField } from "@material-ui/core";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { editUserAction } from "../../redux/actions/userActions";
import { userSelector } from "../../redux/selectors";
import useStyle from "./SettingPageStyle";
const SettingPage = () => {
  const classes = useStyle();
  const dispatch = useDispatch();
  const { data } = useSelector(userSelector);
  const { photo, role, ...inform } = data;
  const [newPhoto, setNewPhoto] = React.useState({
    file: null,
    url: null,
  });
  const setNewPhotoHendler = (e) => {
    setNewPhoto({
      file: e.target.files[0],
      url: URL.createObjectURL(e.target.files[0]),
    });
  };

  const [form, setForm] = React.useState({
    name: "",
    surname: "",
    email: "",
    ...inform,
  });

  React.useEffect(
    () => setForm({ ...form, ...inform }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [data]
  );
  const saveInfornHendler = () => {
    dispatch(editUserAction(form));
  };
  const savePhotoHendler = () => {};
  const showForm = () => {
    const returnForm = [];
    for (let key in form) {
      returnForm.push(
        <TextField
          key={key}
          value={form[key]}
          onChange={(e) => {
            setForm((p) => ({ ...p, [key]: e.target.value }));
          }}
          placeholder={key}
        >
          {key}
        </TextField>
      );
    }
    return returnForm;
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
        <h1>Information about you</h1>
        {showForm()}
        <Button onClick={saveInfornHendler}>Save Inform</Button>
      </Box>
    </Box>
  );
};

export default SettingPage;
