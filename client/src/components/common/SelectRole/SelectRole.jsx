import { MenuItem, Select } from "@material-ui/core";
import React from "react";
import useStyle from "./SelectRoleStyle";
const SelectRole = ({ value, onChange, options }) => {
  const classes = useStyle();
  return (
    <Select value={value} onChange={onChange} className={classes.wrapper}>
      {options.map((role, idx) => (
        <MenuItem key={idx} value={role.toUpperCase()}>
          {role}
        </MenuItem>
      ))}
    </Select>
  );
};

export default SelectRole;
