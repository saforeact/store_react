import { makeStyles } from "@material-ui/core";

export default makeStyles({
  wrapper: {
    display: "flex",
    gap: 15,
    flexDirection: "row",
    marginTop: 15,
  },
  gallery: {
    width: 700,
  },
  title: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  content: {
    display: "flex",
    flexDirection: "column",
  },
  specifications: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  descriptioList: {
    display: "flex",
    flexDirection: "column",
    gap: 15,
    margin: "20px 0",
  },
  buy: {
    display: "flex",
    justifyContent: "space-between",
  },
});
