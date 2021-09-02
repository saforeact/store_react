import { isEmpty } from "lodash";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllUsersAction,
  setNewUsersAction,
} from "../../redux/actions/adminActions";
import { adminka } from "../../redux/selectors";
import UsersRole from "./UsersRole";
const UsersRoleContainer = () => {
  const dispatch = useDispatch();
  const { users, roles } = useSelector(adminka);
  const [userList, setUserList] = useState([]);
  const [userListСhange, setUserListСhange] = useState([]);
  const [userListDelete, setUserListDelete] = useState([]);

  const selectRoleOption = ["None", ...roles];

  const [sortRole, setSortRole] = useState(selectRoleOption[0].toUpperCase());

  const [search, setSearch] = useState("");

  useEffect(() => {
    dispatch(getAllUsersAction());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setUserList(users);
  }, [users]);

  const searchHendler = (e) => {
    setSearch(e.target.value);
  };

  const saveUsers = () => {
    if (userList.findIndex((user) => user.role === "ADMIN")) {
      return null;
    }
    dispatch(setNewUsersAction(userListСhange, userListDelete));
    setUserListСhange([]);
    setUserListDelete([]);
  };

  const selectSortHendler = (e) => {
    setSortRole(e.target.value.toUpperCase());
  };

  const selectNewRole = (_id, e) => {
    setUserList(
      userList.map((u) => (u._id === _id ? { ...u, role: e.target.value } : u))
    );

    setUserListСhange((p) =>
      userListСhange.find((item) => item._id === _id)
        ? userListСhange.map((u) =>
            u._id === _id ? { ...u, role: e.target.value } : u
          )
        : [...p, { _id, role: e.target.value }]
    );
  };

  const removeUser = (_id) => {
    let idSearchItem = userListDelete.findIndex((u) => u === _id);
    setUserListDelete(
      !idSearchItem
        ? userListDelete.filter((u) => u !== _id)
        : [...userListDelete, _id]
    );
  };

  const searchDeleteUsers = (_id) =>
    userListDelete.filter((userID) => userID === _id).length;

  const searchList = (list = []) =>
    !search.trim()
      ? list
      : list.filter(
          (u) => !u.email.toLowerCase().indexOf(search.toLowerCase())
        );

  const returnUserList = () =>
    sortRole === "NONE"
      ? searchList(userList)
      : searchList(userList.filter((u) => u.role === sortRole));

  return !isEmpty(users) ? (
    <UsersRole
      search={search}
      searchHendler={searchHendler}
      sortRole={sortRole}
      selectSortHendler={selectSortHendler}
      selectRoleOption={selectRoleOption}
      returnUserList={returnUserList}
      searchDeleteUsers={searchDeleteUsers}
      removeUser={removeUser}
      selectNewRole={selectNewRole}
      roles={roles}
      saveUsers={saveUsers}
    />
  ) : null;
};

export default UsersRoleContainer;
