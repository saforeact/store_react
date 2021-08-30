import { makeStyles } from "@material-ui/core";

export default makeStyles({
  wrapper: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 25,
    gap: 100,
  },
  photo: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignContent: "center",
    width: 230,
    gap: 10,
  },
  inform: {
    display: "flex",
    gap: 10,
    flexDirection: "column",
  },
  img: { width: 250 },
});
