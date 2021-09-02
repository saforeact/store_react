import { makeStyles } from "@material-ui/core";

export default makeStyles({
  wrapper: {
    display: "flex",
    flexDirection: "column",
    gap: 15,
    margin: "15px 0",
  },
  field: {
    width: "100%",
  },
  specList: {
    display: "flex",
    flexDirection: "column",
    gap: 10,
    margin: "10px 0",
  },
  title: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
