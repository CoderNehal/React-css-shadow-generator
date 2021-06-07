import React, { useState } from 'react';
import './Copy.css';
import AssignmentIcon from '@material-ui/icons/Assignment';
import Button from '@material-ui/core/Button';
import copy from 'copy-to-clipboard';
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';
const Copy = (props) => {
	const [state, setstate] = useState(false);
	const [text, settext] = useState('copy');
	const textToCopy = `box-shadow: ${props.shadowStyles}; 
	 -webkit-box-shadow: ${props.shadowStyles}; 
	 -moz-box-shadow: ${props.shadowStyles};`;
	const handleCopy = () => {
		copy(textToCopy);
		settext('copied');
		setstate(true);
	};
	return (
		<div className='Copy'>
			<input
				type='text'
				style={{ display: 'none' }}
				id='copy'
				value={textToCopy}
			/>
			{`box-shadow: ${props.shadowStyles};`} <br />
			{`-webkit-box-shadow: ${props.shadowStyles};`} <br />
			{`-moz-box-shadow: ${props.shadowStyles};`}
			<Button
				variant='outlined'
				size='medium'
				id='copyButton'
				onClick={handleCopy}
				startIcon={state ? <AssignmentTurnedInIcon /> : <AssignmentIcon />}>
				{text}
			</Button>
		</div>
	);
};

export default Copy;
