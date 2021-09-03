import { makeStyles } from "@material-ui/core";

export default makeStyles({
  wrapper: {
    display: "flex",
    padding: "30px 20px",
    flexDirection: "row",
    borderRadius: 10,
    boxShadow: "2px 2px 4px 1px",
    justifyContent: "space-between",
    gap: 10,
  },
  subItem: {
    display: "flex",
    textAlign: "center",
    flexDirection: "column",
    justifyContent: "space-between",
    gap: 20,
  },
  content: {
    paddingBottom: 45,
  },
  img: {
    height: 100,
    maxWidth: 120,
  },
  span: {
    minWidth: 120,
  },
});
