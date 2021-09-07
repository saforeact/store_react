import { Box } from "@material-ui/core";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Redirect, Route, Switch } from "react-router-dom";
import useStyles from "./AppStyles";
import {
  Basket,
  CreateProductPage,
  Header,
  OneProductPage,
  PayPage,
  SettingPage,
  Shop,
  SideBar,
  UsersRole,
} from "./components";
import { getBasketAction } from "./redux/actions/basketActions";
import { getUserAction } from "./redux/actions/userActions";
import {
  cartPage,
  createProduct,
  devicePage,
  editProductPage,
  payPage,
  settingPage,
  shopPage,
  userRolesPage,
} from "./utils/constants";

const App = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const [openSideBar, setOpenSideBar] = useState(false);
  const setOpenSideBarHendler = () => {
    setOpenSideBar(!openSideBar);
  };

  useEffect(() => {
    dispatch(getUserAction());
    dispatch(getBasketAction());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Box className={classes.app_wrapper}>
      <Box className={classes.app_header}>
        <Header setOpenHendler={setOpenSideBarHendler} />
      </Box>
      <Box className={classes.app_contentBox}>
        <SideBar
          className={classes.app_sideBar}
          open={openSideBar}
          setOpenHendler={setOpenSideBarHendler}
        />
        <Box>
          <Switch>
            <Route path={settingPage} component={SettingPage} />
            <Route path={userRolesPage} component={UsersRole} />
            <Route path={shopPage} component={Shop} />
            <Route path={devicePage} component={OneProductPage} />
            <Route path={createProduct} component={CreateProductPage} />
            <Route path={editProductPage} component={CreateProductPage} />
            <Route path={cartPage} component={Basket} />
            <Route path={payPage} component={PayPage} />
            <Redirect to={shopPage} />
          </Switch>
        </Box>
      </Box>
    </Box>
  );
};

export default App;
