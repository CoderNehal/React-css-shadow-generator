import React,{ useState} from 'react';
import './App.css';
import {
	createMuiTheme,
	makeStyles,
	ThemeProvider,
} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Controls from './Controls/Controls';
import LiveDiv from './LiveDiv/LiveDiv';
import AboutUs from './AboutUs/AboutUs';
import Copy from './Copy/Copy';
import OtherShadows from './OtherShadows/OtherShadows';
import Footer from './Footer/Footer';
const useStyles = makeStyles((theme) => ({
	root: {
		displa: 'flex',
		justifyContent: 'space-between',
		flexDirection: 'row',
	},
	menuButton: {
		marginRight: theme.spacing(2),
	},
	white: {
		color: '#fff',
	},
}));
const theme = createMuiTheme({
	palette: {
		primary: {
			main: '#4C3FE0',
		},
	},
});
const App = () => {
	const [state, setstate] = useState(null);
	const [noRenderPlz, setnoRenderPlz] = useState('ok')
	const classes = useStyles();
	const handleShadow = (shadowData) => {
		
		setstate(shadowData)
	};
	

	return (
		<div className={classes.root}>
			<ThemeProvider theme={theme}>
				<AppBar position='static'>
					<Toolbar variant='dense'>
						<IconButton
							edge='start'
							className={classes.menuButton}
							color='inherit'
							aria-label='menu'></IconButton>
						<Typography variant='h5' className={classes.white}>
							CSS BOX SHADOW GENERATOR
						</Typography>
					</Toolbar>
				</AppBar>
				<div className='Main-Container'>
					<Controls shadowProperties={handleShadow}  />
					<LiveDiv shadowStyles={state} />
					<AboutUs noRenderPlz={noRenderPlz} />
					<Copy shadowStyles={state} />
					
				</div>

				<OtherShadows noRenderPlz={noRenderPlz} />
				<Footer />
			</ThemeProvider>
		</div>
	);
};

export default App;
