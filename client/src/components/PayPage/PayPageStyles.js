import { makeStyles } from "@material-ui/core";

export default makeStyles({
  wrapper: {
    display: "flex",
    justifyContent: "center",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: 20,
    padding: 15,
    width: 500,
    boxShadow: "1px 1px 4px 0",
  },
  cardField: {},
  fieldsGroup: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
  },
});
