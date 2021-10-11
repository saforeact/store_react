import { makeStyles } from "@material-ui/core";

export default makeStyles({
  wrapper: {
    display: "flex",
    flexDirection: "column",
    gap: 15,
  },
  isEmpty: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "end",
    height: "40vh",
  },
});
