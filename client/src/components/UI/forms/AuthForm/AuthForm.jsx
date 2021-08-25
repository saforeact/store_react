import { TextField } from "@material-ui/core";
import React from "react";
import { useDispatch } from "react-redux";
import useInput from "../../../../hooks/useInput";
import {
  signInAction,
  signUpAction,
} from "../../../../redux/actions/authActions";
import EmptyForm from "../EmptyForm/EmptyForm";

const SignIn = ({ selectForm, handleClose }) => {
  const dispatch = useDispatch();

  const email = useInput("");
  const password = useInput("");
  const confirmPassword = useInput("");

  const onSubmitHendler = () => {
    if (selectForm) {
      const form = { email: email.value, password: password.value };
      dispatch(signInAction(form));
      handleClose();
    }
    if (!selectForm) {
      if (password.value !== confirmPassword.value) {
        return;
      }

      dispatch(
        signUpAction({
          email: email.value,
          password: password.value,
        })
      );
    }
  };

  return (
    <EmptyForm
      onSubmitHendler={onSubmitHendler}
      submitText={selectForm ? "Login" : "Register"}
    >
      <TextField placeholder="Email" {...email} />
      <TextField placeholder="Password" {...password} />
      {!selectForm && (
        <TextField placeholder="Confirm password" {...confirmPassword} />
      )}
    </EmptyForm>
  );
};

export default SignIn;
