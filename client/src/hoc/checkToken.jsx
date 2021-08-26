import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { LOCAL_STORAGE_TOKEN, shopPage } from "../utils/constants";

export const checkToken =
  (Component) =>
  ({ ...props }) => {
    const history = useHistory();

    const [isSuccess, setIsSeccess] = useState(false);
    useEffect(() => {
      if (localStorage.getItem(LOCAL_STORAGE_TOKEN)) {
        setIsSeccess(true);
      } else {
        history.push(shopPage);
      }
    }, [history]);

    return isSuccess && <Component {...props} />;
  };
