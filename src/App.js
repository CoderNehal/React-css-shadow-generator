import React from 'react';
import './App.css'
import { createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Controls from './Controls/Controls'
import LiveDiv from './LiveDiv/LiveDiv'
const useStyles = makeStyles((theme) => ({
	root: {
	  
	  displa:'flex',
	justifyContent:'space-between',
	flexDirection:'row'
	},
	menuButton: {
	  marginRight: theme.spacing(2),
	},
	white:{
		color:'#fff'
	}
  }));
  const theme = createMuiTheme({
	palette: {
		 primary: {
			 main: '#ADD8E6'
		 }
		
	   }
	 });
const App=()=> { 
	const classes = useStyles();

	return (
		<div className={classes.root}>
		<ThemeProvider theme={theme}>
<AppBar position="static">
  <Toolbar variant="dense"  >
    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
      
    </IconButton>
    <Typography variant="h5"  className={classes.white}>
      CSS SHADOW GENERATOR
    </Typography>
  </Toolbar>
</AppBar>
<div className='Main-Container'>
<Controls />

<LiveDiv />

</div> 

</ThemeProvider>	
		</div>
	);
}

export default App;
