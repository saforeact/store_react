import { makeStyles } from "@material-ui/core";

export default makeStyles({
  form: {
    display: "flex",
    flexDirection: "column",
    paddingTop: 50,
  },
  btn: {
    borderRadius: 4,
    textAlign: "center",
    justifyContent: "center",
    margin: 25,
    cursor: "pointer",
    display: "flex",
    font: "14px/50px Tahoma",
    transition: "all 0.18s ease-in-out",
    border: "1px solid #4FD666",
    background:
      "linear-gradient(to top right, #3EC97A, #69EA49 20%, rgba(255, 255, 255, 0) 80%, rgba(255, 255, 255, 0)) top right/500% 500%",
    color: "#4FD666",
    "&:hover": {
      color: "white",
      backgroundPosition: "bottom left",
    },
  },
});
