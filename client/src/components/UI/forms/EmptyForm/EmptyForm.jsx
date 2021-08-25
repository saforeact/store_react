import { Button } from "@material-ui/core";
import React from "react";
import useStyle from "./EmptyFormStyle";
const EmptyForm = ({ onSubmitHendler, children, submitText }) => {
  const classes = useStyle();
  const onSubmitForm = (e) => {
    e.preventDefault();
    onSubmitHendler(e);
  };
  return (
    <form onSubmit={onSubmitForm} className={classes.form}>
      {children}
      <Button type="submit">{submitText}</Button>
    </form>
  );
};

export default EmptyForm;
