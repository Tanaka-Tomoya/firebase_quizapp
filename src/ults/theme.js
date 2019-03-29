import { createMuiTheme } from "@material-ui/core/styles";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

export const theme = createMuiTheme({
  palette: {
    type: "light",
    primary: { main: "#00B8D4" },
    default: { default: "#FFFFFF" },
    secondary: { main: "#FFA000" }
  },
  typography: {
    useNextVariants: true,
    fontFamily: "mplus-1p-bold",
    fontWeight: 800
  }
});

export const MainTypography = withStyles({
  root: {
    color: "rgba(0,0,0,0.87)",
    width: "100%"
  }
})(Typography);
