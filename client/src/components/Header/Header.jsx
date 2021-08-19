import { Box, Button, Container, Typography } from "@material-ui/core";
import React, { useState } from "react";
import { ModalSign } from "../UI";

import NavMenu from "./common/NavMenu/NavMenu.jsx";
import useStyles from "./HeaderStyle.js";

const Header = () => {
  const classes = useStyles();
  const [openModalSign, setOpenModalSign] = useState(false);
  const setOpenModalSignHendler = () => {
    setOpenModalSign(!openModalSign);
  };
  return (
    <Box className={classes.headerWrapper}>
      <ModalSign open={openModalSign} handleClose={setOpenModalSignHendler} />
      <Container>
        <Box className={classes.top}>
          <Box className={classes.info}>
            <Typography>+8(800)05553535</Typography>
            <Typography className={classes.hr}>
              Работаем 7 дней в неделю
            </Typography>
            <Typography>9:00 — 18:00</Typography>
          </Box>
          <Box className={classes.sign}>
            <Button className={classes.btn} onClick={setOpenModalSignHendler}>
              Войти / Регистрация
            </Button>
          </Box>
        </Box>
        <Box className={classes.down}>
          <Box>LOGO</Box>
          <NavMenu />
        </Box>
      </Container>
    </Box>
  );
};

export default Header;
