import React, { useState } from "react";
import { useSelector } from "react-redux";
import { userSelector } from "../../redux/selectors";
import Header from "./Header";

const HeaderContainer = (props) => {
  const [openModalSign, setOpenModalSign] = useState(false);
  const { data } = useSelector(userSelector);
  const setOpenModalSignHendler = () => {
    setOpenModalSign(!openModalSign);
  };

  return (
    <Header
      {...props}
      openModalSign={openModalSign}
      setOpenModalSignHendler={setOpenModalSignHendler}
      user={data}
    />
  );
};

export default HeaderContainer;
