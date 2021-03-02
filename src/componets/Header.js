import { AppBar } from "@material-ui/core"
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    
    
  }));

const Header = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            
      <AppBar position="static">
        <Toolbar>       
          <Typography variant="h6" className={classes.title}>
            Note App
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
    )
}

export default Header;