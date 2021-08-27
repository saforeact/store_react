import { Box, Button, TextField } from "@material-ui/core";
import { Delete, RotateLeft } from "@material-ui/icons";

import classnames from "classnames";
import React from "react";
import { SelectRole } from "../common";
import useStyle from "./UsersRoleStyle";
const UsersRole = ({
  search,
  searchHendler,
  sortRole,
  selectSortHendler,
  selectRoleOption,
  returnUserList,
  searchDeleteUsers,
  removeUser,
  selectNewRole,
  roles,
  saveUsers,
}) => {
  const classes = useStyle();

  return (
    <Box className={classes.wrapper}>
      <Box className={classes.controleList}>
        <TextField
          placeholder="Search"
          value={search}
          onChange={searchHendler}
        />
        <SelectRole
          value={sortRole}
          onChange={selectSortHendler}
          options={selectRoleOption}
        />
      </Box>
      {returnUserList().map((user) => (
        <Box
          className={classnames(
            classes.user,
            searchDeleteUsers(user._id) ? classes.remove : null
          )}
          key={user.email}
        >
          <p>{user.email}</p>
          <Box className={classes.control}>
            <Button onClick={() => removeUser(user._id)}>
              {!searchDeleteUsers(user._id) ? <Delete /> : <RotateLeft />}
            </Button>
            <SelectRole
              value={user.role.toUpperCase()}
              onChange={(e) => selectNewRole(user._id, e)}
              options={roles}
            />
          </Box>
        </Box>
      ))}
      <Button onClick={saveUsers}>Save</Button>
    </Box>
  );
};

export default UsersRole;
