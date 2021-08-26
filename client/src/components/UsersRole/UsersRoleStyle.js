import { makeStyles } from "@material-ui/core";

export default makeStyles({
  wrapper: {
    display: "flex",
    flexDirection: "column",
    gap: 15,
  },
  user: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 20px",
    border: "solid black 1px",
    width: "94vw",
    boxShadow: "2px 2px 4px 0px",
  },
  control: {
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 15,
  },
  remove: {
    opacity: 0.5,
  },
});
