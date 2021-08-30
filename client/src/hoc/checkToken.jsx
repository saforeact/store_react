import React from "react";
import { useHistory } from "react-router-dom";
import { LOCAL_STORAGE_TOKEN, shopPage } from "../utils/constants";

export const checkToken =
  (Component) =>
  ({ ...props }) => {
    const history = useHistory();
    const token = localStorage.getItem(LOCAL_STORAGE_TOKEN);
    if (token) {
      return <Component {...props} />;
    } else {
      history.push(shopPage);
      return null;
    }
  };
