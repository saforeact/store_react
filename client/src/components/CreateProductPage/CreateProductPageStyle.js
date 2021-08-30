import { makeStyles } from "@material-ui/core";

export default makeStyles({
  wrapper: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    padding: "10px 20px",
    gap: 15,
  },
  help: {
    display: "flex",
    flexDirection: "column",
    gap: 15,
  },
  form: {
    display: "flex",
    flexDirection: "column",
    padding: "25px 50px",
    borderRadius: 7,
    border: "solid black 1px",
    boxShadow: "1px 1px 4px 0",
  },
});
