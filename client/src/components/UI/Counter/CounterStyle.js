import { makeStyles } from "@material-ui/core";

export default makeStyles({
  wrapper: {
    border: "solid black 1px",
    borderRadius: 20,
    overflow: "hidden",
    display: "inline-flex",
    width: 170,
  },
  input: {
    display: "inline-flex",

    textAlign: "center",
    color: "black",
    width: 50,
  },
  decrement: {
    display: "inline-flex",
    justifyContent: "start",
  },
  increment: {
    display: "inline-flex",
    justifyContent: "end",
  },
});
