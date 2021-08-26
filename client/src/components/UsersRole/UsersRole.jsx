import { Box, Button, MenuItem, Select } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllUsersAction,
  setNewUsersAction,
} from "../../redux/actions/adminActions";
import { adminka } from "../../redux/selectors";
import useStyle from "./UsersRoleStyle";
import { Delete } from "@material-ui/icons";
import classnames from "classnames";
const UsersRole = () => {
  const classes = useStyle();
  const dispatch = useDispatch();
  const { users, roles } = useSelector(adminka);
  const [userList, setUserList] = useState([]);
  const [userListСhange, setUserListСhange] = useState([]);
  const [userListDelete, setUserListDelete] = useState([]);
  useEffect(() => {
    dispatch(getAllUsersAction());
  }, [dispatch]);

  useEffect(() => {
    setUserList(users);
  }, [users]);

  const saveUsers = () => {
    let checkAdmin = userList.filter((user) => user.role === "ADMIN");
    if (!checkAdmin.length) {
      return null;
    }
    dispatch(setNewUsersAction(userListСhange, userListDelete));
  };

  const selectNewRole = (user, e) => {
    const { _id } = user;

    const newUserList = userList.map((user) => {
      if (user._id === _id) {
        user = { ...user, role: e.target.value };
      }
      return user;
    });
    setUserList(newUserList);

    let changeList = userListСhange;
    let changeFlag = userListСhange.filter((item) => item._id === _id);
    if (changeFlag.length) {
      changeList = changeList.map((u) => {
        if (u._id === _id) {
          u = { ...u, role: e.target.value };
        }
        return u;
      });
    } else {
      changeList.push({ _id, role: e.target.value });
    }
    setUserListСhange(changeList);
  };
  const removeUser = (_id) => {
    let idSearchItem;
    userListDelete.forEach((u, idx) => {
      if (u === _id) {
        idSearchItem = idx;
      }
    });
    if (idSearchItem !== undefined) {
      setUserListDelete(
        userListDelete.filter((_, idx) => idx !== idSearchItem)
      );
    } else {
      setUserListDelete([...userListDelete, _id]);
    }
  };

  const searchDeleteUsers = (_id) =>
    userListDelete.filter((userID) => userID === _id).length;

  if (!userList || !roles) {
    return null;
  }

  return (
    <Box className={classes.wrapper}>
      {userList.map((user) => (
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
              <Delete />
            </Button>
            <Select
              value={user.role.toUpperCase()}
              onChange={(e) => selectNewRole(user, e)}
            >
              {roles.map((role, idx) => (
                <MenuItem key={idx} value={String(role).toUpperCase()}>
                  {role}
                </MenuItem>
              ))}
            </Select>
          </Box>
        </Box>
      ))}
      <Button onClick={saveUsers}>Save</Button>
    </Box>
  );
};

export default UsersRole;
