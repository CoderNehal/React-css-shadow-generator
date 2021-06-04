import React, { useState } from 'react';
import './Controls.css';
import Slider from '@material-ui/core/Slider';
import { withStyles, makeStyles } from '@material-ui/core/styles';

import Typography from '@material-ui/core/Typography';
import Tooltip from '@material-ui/core/Tooltip';

const PrettoSlider = withStyles({
	root: {
		color: '#1907DB',
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
		color: '#fff',
		left: 'calc(-50% + 4px)',
		background: '#e0e0e0',
		borderRadius: '50%',
		display: 'none',
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
	const [opacity, setopacity] = useState(0.5);
	const updateHRange = (e, data) => {
		setHSL(data);
	};
	const updateVRange = (e, data) => {
		setVSL(data);
	};
	const updateBRange = (e, data) => {
		setBR(data);
	};
	const updateSRange = (e, data) => {
		setSR(data);
	};
	const updateORange = (e, data) => {
		setopacity(data);
	};
	const custStyle = {
		display: 'flex',
		justifyContent: 'space-between',
	};

	console.log(BR);
	return (
		<div className='Controls'>
			<Typography style={custStyle}>
				Horizontal Shadow Length :<Typography>{HSL}px</Typography>{' '}
			</Typography>

			<PrettoSlider
				valueLabelDisplay='auto'
				onChange={updateHRange}
				value={HSL}
				defaultValue={20}
				max={Number('200')}
				min={Number('-200')}
			/>
			<Typography style={custStyle}>
				Vertical Shadow Length :<Typography>{VSL}px</Typography>{' '}
			</Typography>

			<PrettoSlider
				valueLabelDisplay='auto'
				onChange={updateVRange}
				value={VSL}
				defaultValue={20}
				max={Number('200')}
				min={Number('-200')}
			/>

			<Typography style={custStyle}>
				Blur Radius :<Typography>{BR}px</Typography>{' '}
			</Typography>

			<PrettoSlider
				valueLabelDisplay='auto'
				onChange={updateBRange}
				value={BR}
				defaultValue={20}
				max={Number('200')}
				min={Number('-200')}
			/>

			<Typography style={custStyle}>
				Spread Radius :<Typography>{SR}px</Typography>{' '}
			</Typography>

			<PrettoSlider
				valueLabelDisplay='auto'
				onChange={updateSRange}
				value={SR}
				defaultValue={20}
				max={Number('200')}
				min={Number('-200')}
			/>

			<Typography style={custStyle} gutterBottom>
				Shadow Color :<Typography>{ShadowColor}</Typography>{' '}
			</Typography>
			<input  type="color"  onChange={e=>{setShadowColor(e.target.value)}} value={ShadowColor} />


			<Typography style={custStyle}>
				Shadow Color Opacity :<Typography>{opacity}</Typography>{' '}
			</Typography>

			<PrettoSlider
				valueLabelDisplay='auto'
				onChange={updateORange}
				value={opacity}
				defaultValue={20}
				step={0.01}
				max={Number('1.0')}
				min={Number('0.0')}
			/>
		</div>
	);
};

export default Controls;
