import { Box, Button, Modal } from "@material-ui/core";
import classNames from "classnames";
import React, { useState } from "react";
import { animated, useTransition } from "react-spring";
import { AuthForm } from "../forms";
import useStyles from "./ModalSignStyle";
const ModalSign = ({ open = false, handleClose = () => {} }) => {
  const classes = useStyles();
  const [isSelectFormSignIn, setIsSelectFormSignIn] = useState(true);
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
                onClick={() => setIsSelectFormSignIn(true)}
                className={classNames(
                  classes.btn,
                  isSelectFormSignIn ? classes.btn__active : null
                )}
              >
                SignIn
              </Button>
              <Button
                onClick={() => setIsSelectFormSignIn(false)}
                className={classNames(
                  classes.btn,
                  !isSelectFormSignIn ? classes.btn__active : null
                )}
              >
                SingUp
              </Button>
            </Box>
            <Box className={classes.form}>
              <AuthForm
                selectForm={isSelectFormSignIn}
                handleClose={handleClose}
              />
            </Box>
          </Box>
        </animated.div>
      </Modal>
    ) : null
  );
};

export default ModalSign;
