import { makeStyles } from "@material-ui/core";

export default makeStyles({
  wrapper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  center: { display: "flex", justifyContent: "center", alignItems: "center" },
  modalWindow: {
    padding: 50,
    borderRadius: 15,
    boxShadow: "5px 5px 2px black",
    backgroundColor: "white",
  },
  btn: {
    borderRadius: 0,
  },
  btn__active: {
    backgroundColor: "#e2e2e2",
  },
  form: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    minWidth: 300,
  },
});
