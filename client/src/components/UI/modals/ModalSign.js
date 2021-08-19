import { Box, Button, Modal } from "@material-ui/core";
import classNames from "classnames";
import React, { useState } from "react";
import { animated, useTransition } from "react-spring";
import { AuthForm } from "../forms";
import useStyles from "./ModalSignStyle";
const ModalSign = ({ open = false, handleClose = () => {} }) => {
  const classes = useStyles();
  const [selectForm, setSelectForm] = useState("in");
  const transition = useTransition(open, {
    from: { x: -800, y: -800, opacity: 0 },
    enter: { x: 0, y: 0, opacity: 1 },
    leave: { x: 800, y: 800, opacity: 0 },
  });

  return transition((style, item) =>
    item ? (
      <Modal open={open} onClose={handleClose} className={classes.wrapper}>
        <animated.div style={style} className={classes.modalWindow}>
          <Box>
            <Box className={classes.center}>
              <Button
                onClick={() => setSelectForm("in")}
                className={classNames(
                  classes.btn,
                  selectForm === "in" ? classes.btn__active : null
                )}
              >
                SignIn
              </Button>
              <Button
                onClick={() => setSelectForm("up")}
                className={classNames(
                  classes.btn,
                  selectForm === "up" ? classes.btn__active : null
                )}
              >
                SingUp
              </Button>
            </Box>
            <Box className={classes.form}>
              <AuthForm selectForm={selectForm} />
            </Box>
          </Box>
        </animated.div>
      </Modal>
    ) : null
  );
};

export default ModalSign;
