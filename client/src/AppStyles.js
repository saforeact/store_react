import { makeStyles } from "@material-ui/core";

export default makeStyles({
  app_wrapper: {
    display: "flex",
    flexDirection: "column",
    gap: 10,
  },
  app_header: {},
  app_contentBox: {
    display: "flex",
    flexDirection: "row",
    gap: 25,
    justifyContent: "center",
  },
  app_sideBar: {
    width: 200,
  },
});
