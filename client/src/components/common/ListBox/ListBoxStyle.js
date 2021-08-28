import { makeStyles } from "@material-ui/core";

export default makeStyles({
  wrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 10,
    border: "1px solid black",
    padding: 10,
    height: 200,
    width: 175,
    boxShadow: "1px 1px 4px 0",
    borderRadius: 7,
  },
  select: {
    width: "100%",
    height: "100%",
    "& select": {
      overflow: "auto",
      width: "100%",
      height: "100% !important",
      "& option": {
        margin: "5px 0",
      },
    },
  },
});
