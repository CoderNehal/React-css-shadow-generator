import React, { useState } from 'react';
import './Controls.css';
import Slider from '@material-ui/core/Slider';
import { withStyles, makeStyles } from '@material-ui/core/styles';

import Typography from '@material-ui/core/Typography';
import Tooltip from '@material-ui/core/Tooltip';
const PrettoSlider = withStyles({
	root: {
		color: '#e0e0e0',
		height: 8,
		marginTop: 10,
	},
	thumb: {
		height: 24,
		width: 24,
		backgroundColor: '#fff',
		border: '2px solid currentColor',
		marginTop: -8,
		marginLeft: -12,
		'&:focus, &:hover, &$active': {
			boxShadow: 'inherit',
		},
	},
	active: {},
	valueLabel: {
		left: 'calc(-50% + 4px)',
	},
	track: {
		height: 8,
		borderRadius: 4,
	},
	rail: {
		height: 8,
		borderRadius: 4,
	},
})(Slider);
const Controls = () => {
	const [HSL, setHSL] = useState(0);
	const [VSL, setVSL] = useState(0);
	const [BR, setBR] = useState(0);
	const [SR, setSR] = useState(0);
	const [ShadowColor, setShadowColor] = useState('rgba(0,0,0)');
	const [opacity, setopacity] = useState(1);
	const updateHRange = (e, data) => {
		setHSL(data);
	};
	const updateVRange = (e, data) => {
		setVSL(data);
	};
	const custStyle = {
		display: 'flex',
		justifyContent: 'space-between',
	};
	console.log(VSL);
	return (
		<div className='Controls'>
			<Typography style={custStyle}>
				Horizontal Shadow Length :<Typography>{HSL}px</Typography>{' '}
			</Typography>

			<PrettoSlider
				valueLabelDisplay='auto'
				aria-label='pretto slider'
				onChange={git add.}
				value={HSL}
				defaultValue={20}
				max={Number('200')}
				min={Number('-200')}
			/>
			<Typography style={custStyle}>
				Horizontal Shadow Length :<Typography>{HSL}px</Typography>{' '}
			</Typography>

			<PrettoSlider
				valueLabelDisplay='auto'
				aria-label='pretto slider'
				onChange={updateVRange}
				value={VSL}
				defaultValue={20}
				max={Number('200')}
				min={Number('-200')}
			/>
		</div>
	);
};

export default Controls;
