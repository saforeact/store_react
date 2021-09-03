import { Button, Input } from "@material-ui/core";
import React from "react";
import useStyles from "./CounterStyle";
const Counter = ({ value, setValue }) => {
  const classes = useStyles();

  const decrement = () => {
    if (value >= 2) {
      setValue(value - 1);
    }
  };
  const increment = () => {
    setValue(value + 1);
  };

  return (
    <Input
      className={classes.wrapper}
      inputProps={{ className: classes.input }}
      disabled
      value={value}
      startAdornment={
        <Button className={classes.decrement} onClick={decrement}>
          -
        </Button>
      }
      endAdornment={
        <Button className={classes.increment} onClick={increment}>
          +
        </Button>
      }
    />
  );
};

export default Counter;
