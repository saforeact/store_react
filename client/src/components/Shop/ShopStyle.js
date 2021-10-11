import { makeStyles } from "@material-ui/core";

export default makeStyles({
  wrapper: {
    paddingTop: 10,
    display: "flex",
    flexDirection: "column",
    gap: 30,
    padding: "0 10px",
  },
  shop: {
    display: "flex",
    flexDirection: "row",
    gap: 30,
    padding: "0 10px",
    flexWrap: "wrap",
  },
  filters: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
    padding: "0 10px",
    gap: 30,
  },
  search: {
    transition: "all 1s",
  },
  searchActive: {
    width: 200,
  },
  searchDis: {
    width: 0,
  },
  card: {
    padding: 10,
    width: 300,
    height: 350,

    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 15,
    justifyContent: "space-between",
    boxShadow: "1px 1px 4px 0",
    "& img": {
      height: 225,
    },
  },
  controle: {
    display: "flex",
    width: "100%",
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
  },
  select: {
    display: "flex",
    flex: "row",
    alignItems: "center",
    gap: 10,
    "& .MuiInputBase-root": {
      minWidth: 100,
    },
  },
});
