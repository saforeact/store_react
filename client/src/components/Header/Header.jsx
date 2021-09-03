import { Box, Button, Container, Typography } from "@material-ui/core";
import { isEmpty } from "lodash";
import React from "react";
import { Avatar } from "..";
import { ModalSign } from "../UI";
import NavMenu from "./common/NavMenu/NavMenu.jsx";
import useStyles from "./HeaderStyle.js";
const Header = ({
  setOpenHendler,
  openModalSign,
  setOpenModalSignHendler,
  user,
}) => {
  const classes = useStyles();

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
            {isEmpty(user) ? (
              <Button className={classes.btn} onClick={setOpenModalSignHendler}>
                Войти / Регистрация
              </Button>
            ) : (
              <Avatar />
            )}
          </Box>
        </Box>
        <Box className={classes.down}>
          <Box>
            <span onClick={setOpenHendler}>LOGO</span>
          </Box>
          <NavMenu />
        </Box>
      </Container>
      )
    </Box>
  );
};

export default Header;
