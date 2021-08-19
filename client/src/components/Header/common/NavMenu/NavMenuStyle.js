import { makeStyles } from "@material-ui/core";

export default makeStyles({
  list: {
    height: "100%",
    display: "flex",
    gap: 15,
    "& a": {
      textDecoration: "none",
      padding: "20px 25px",
      border: "1px solid",
      borderRadius: 8,
      "&:hover": {
        backgroundColor: "#2b2a2a",
      },
    },
  },
  activeListItem: {
    backgroundColor: "#1F1F1F",

    color: "#ffffff",
  },
  nav: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 60,
  },

  icons: {
    display: "flex",
    flexDirection: "row",
    "& button:hover *": {
      color: "#ffffff",
    },
    "& *": {
      color: "#c1c1c1",
    },
  },
});
