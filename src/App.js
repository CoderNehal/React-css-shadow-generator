import React, { useState, useEffect } from 'react';
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
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';
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
	const [noRenderPlz, setnoRenderPlz] = useState(1);
	const classes = useStyles();
	const { ref, inView } = useInView({
		threshold: 0,
	});
	const animation = useAnimation();
	useEffect(() => {
		
		if (inView) {
			animation.start({
				y: 0,
				opacity: 1,
				transition: { duration: 1 },
			});
			setnoRenderPlz(noRenderPlz + 1);
		}
		if (!inView) {
			animation.stop({
				y: 100,
				opacity: 0,
				transition: { duration: 1.6 },
			});
		}

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [inView]);
	const handleShadow = (shadowData) => {
		setstate(shadowData);
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
					<Controls shadowProperties={handleShadow} />
					<LiveDiv shadowStyles={state} />
					<AboutUs noRenderPlz={noRenderPlz} />
					<Copy shadowStyles={state} />
				</div>
				<motion.div
					initial={{ opacity: 0, y: 100 }}
					ref={ref}
					animate={animation}>
					<OtherShadows noRenderPlz={noRenderPlz} />
				</motion.div>

				<Footer />
			</ThemeProvider>
		</div>
	);
};

export default App;
