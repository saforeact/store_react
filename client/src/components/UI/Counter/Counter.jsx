import { Button, Input } from "@material-ui/core";
import React, { useState } from "react";
import useStyles from "./CounterStyle";
const Counter = () => {
  const classes = useStyles();
  const [value, setValue] = useState(1);
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
