import { AppBar } from "@material-ui/core"
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  palette: {
    primary: {
      main: "#ffa726"
    }
  }


}));
const theme = createMuiTheme({
  palette: {
    primary: {

      main: '#ffa726'
    }
  }
});

const Header = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <ThemeProvider theme={theme}>
        <AppBar position="static" color="primary">
          <Toolbar>
            <Typography variant="h6" className={classes.title}>
              Note App
          </Typography>
          </Toolbar>
        </AppBar>
      </ThemeProvider>
    </div>
  )
}

export default Header;