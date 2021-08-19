import { makeStyles } from "@material-ui/core";

export default makeStyles({
  headerWrapper: {
    "& *": {
      color: "#969696",
    },
    display: "flex",
    flexDirection: "column",

    backgroundColor: "#000000",
    "& p": {
      display: "flex",
      fontFamily: "PT Sans",
      fontSize: 12,
      fontStyle: "normal",
      letterSpacing: 2,
      alignItems: "center",
    },
  },
  hr: {
    "&::after": {
      content: '" "',
      width: 1,
      height: 15,
      backgroundColor: "#969696",
      margin: 10,
    },
    "&::before": {
      content: '" "',
      width: 1,
      height: 15,
      backgroundColor: "#969696",
      margin: 10,
    },
  },
  top: {
    display: "flex",
    minHeight: 44,
    textAlign: "center",
    justifyContent: "space-between",
    alignItems: "center",
  },
  info: {
    display: "flex",

    flexDirection: "row",
  },
  sign: {},
  btn: {
    fontFamily: "PT Sans",
    fontSize: 12,
    fontStyle: "normal",
    fontWeight: 400,
    letterSpacing: 2,
    textAlign: "right",
  },
  down: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    minHeight: 80,
  },
});
