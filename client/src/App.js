import { Box } from "@material-ui/core";

import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Redirect, Route, Switch } from "react-router-dom";
import useStyles from "./AppStyles";
import {
  Basket,
  CreateProductPage,
  Header,
  OneProductPage,
  SettingPage,
  Shop,
  SideBar,
  UsersRole,
  SuccessPay,
} from "./components";

import { getBasketAction } from "./redux/actions/basketActions";
import { getUserAction } from "./redux/actions/userActions";
import {
  canceled,
  cartPage,
  createProduct,
  devicePage,
  editProductPage,
  payPage,
  settingPage,
  shopPage,
  success,
  userRolesPage,
} from "./utils/constants";

const App = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const stripePromise = loadStripe(
    "pk_test_51JWg7VI2bpM0aZ8CPb7vfjlLjnI8V1fizLg0t6ORd7breg7TNzJE1okxiOAurHSzk3EiOEaP6jwrrFWYTe8q5Fhg00XTVq9sEx"
  );
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
            <Route path={success} component={SuccessPay} />
            <Route path={canceled} component={Basket} />
            <Redirect to={shopPage} />
          </Switch>
        </Box>
      </Box>
    </Box>
  );
};

export default App;
