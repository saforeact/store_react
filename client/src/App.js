import { Box } from "@material-ui/core";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Redirect, Route, Switch } from "react-router-dom";
import useStyles from "./AppStyles";
import {
  CreateProductPage,
  Header,
  OneProductPage,
  SettingPage,
  Shop,
  SideBar,
  UsersRole,
} from "./components";
import { checkToken } from "./hoc/checkToken";
import { getUserAction } from "./redux/actions/userActions";
import {
  createProduct,
  devicePage,
  editProductPage,
  LOCAL_STORAGE_TOKEN,
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
    if (localStorage.getItem(LOCAL_STORAGE_TOKEN)) {
      dispatch(getUserAction());
    }
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
            <Route path={settingPage} component={checkToken(SettingPage)} />
            <Route path={userRolesPage} component={checkToken(UsersRole)} />
            <Route path={shopPage} component={Shop} />
            <Route path={devicePage} component={OneProductPage} />
            <Route
              path={createProduct}
              component={checkToken(CreateProductPage)}
            />
            <Route
              path={editProductPage}
              component={checkToken(CreateProductPage)}
            />
            <Redirect to={shopPage} />
          </Switch>
        </Box>
      </Box>
    </Box>
  );
};

export default App;
