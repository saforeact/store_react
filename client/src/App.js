import { Box } from "@material-ui/core";
import { Header, SideBar } from "./components";
import useStyles from "./AppStyles";
import { useState } from "react";
const App = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(true);
  const setOpenHendler = (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setOpen(!open);
  };
  return (
    <Box className={classes.app_wrapper}>
      <Box className={classes.app_header}>
        <Header setOpenHendler={setOpenHendler} />
      </Box>
      <Box className={classes.app_contentBox}>
        <SideBar
          className={classes.app_sideBar}
          open={open}
          setOpenHendler={setOpenHendler}
        />
        <Box></Box>
      </Box>
    </Box>
  );
};

export default App;
