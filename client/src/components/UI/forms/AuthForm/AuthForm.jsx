import { Button, TextField } from "@material-ui/core";
import React, { useState } from "react";
import useStyles from "./AuthStyles";
import { useDispatch } from "react-redux";
import {
  signInAction,
  signUpAction,
} from "../../../../redux/actions/authActions";
const SignIn = ({ selectForm }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [form, setForm] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const onSubmitHendler = (e) => {
    e.preventDefault();
    if (selectForm === "in") {
      const { confirmPassword, ...signInForm } = form;
      dispatch(signInAction(signInForm));
    }
    if (selectForm === "up") {
      if (form.password !== form.confirmPassword) {
        return;
      }
      dispatch(signUpAction(form));
    }
  };

  const setFormHendler = (e) => {
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));
  };
  return (
    <form onSubmit={onSubmitHendler} className={classes.form}>
      <TextField
        name="email"
        placeholder="Email"
        onChange={setFormHendler}
        value={form.email}
      />
      <TextField
        name="password"
        placeholder="Password"
        onChange={setFormHendler}
        value={form.password}
      />
      {selectForm === "up" && (
        <TextField
          name="confirmPassword"
          placeholder="Confirm password"
          onChange={setFormHendler}
          value={form.confirmPassword}
        />
      )}
      <Button type="submit">Login</Button>
    </form>
  );
};

export default SignIn;
