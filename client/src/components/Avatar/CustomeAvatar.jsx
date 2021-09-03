import { Avatar, Fade, Menu, MenuItem } from "@material-ui/core";
import { isEmpty } from "lodash";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { dataClearAction } from "../../redux/actions/commonActions";
import { userSelector } from "../../redux/selectors";
import { personalAreaPage, profilePage, shopPage } from "../../utils/constants";
const CustomeAvatar = () => {
  const { data } = useSelector(userSelector);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const history = useHistory();
  const dispatch = useDispatch();
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const pushToProfile = () => {
    history.push(profilePage);
    handleClose();
  };
  const pushToMyAcount = () => {
    history.push(personalAreaPage);
    handleClose();
  };
  const logOut = () => {
    history.push(shopPage);
    dispatch(dataClearAction());
    handleClose();
  };
  if (isEmpty(data)) {
    return null;
  }
  const munuItems = [
    { text: "Profile", onClick: pushToProfile },
    { text: "My account", onClick: pushToMyAcount },
    { text: "Logout", onClick: logOut },
  ];
  return (
    <>
      <Avatar
        alt={data.name || data.email}
        src={data.photo}
        onClick={handleClick}
      />
      <Menu
        id="fade-menu"
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        {munuItems.map((item, idx) => (
          <MenuItem key={idx} onClick={item.onClick}>
            {item.text}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};

export default CustomeAvatar;
