import { Box, Select } from "@material-ui/core";
import React, { useState } from "react";
import userStyles from "./ListBoxStyle";
const ListBox = ({ title, list = [], onChange }) => {
  const classes = userStyles();
  const [value, setValue] = useState();
  const setValueHendler = (e) => {
    setValue(e.target.value);
    onChange(e.target.value);
  };
  return (
    <Box className={classes.wrapper}>
      {title && <h2>{title}</h2>}
      <Select
        multiple
        native
        value={value}
        onChange={setValueHendler}
        className={classes.select}
      >
        {list.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </Select>
    </Box>
  );
};

export default ListBox;
