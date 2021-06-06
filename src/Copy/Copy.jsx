import React, { useState } from 'react';
import './Copy.css';
import AssignmentIcon from '@material-ui/icons/Assignment';
import Button from '@material-ui/core/Button';

import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';
const Copy = (props) => {
	const [state, setstate] = useState(false);
	const handleCopy = () => {
		//Look here
		var copyText = document.getElementById('myInput');
		copyText.select();
		copyText.setSelectionRange(0, 99999);
		document.execCommand('copy');
		alert('Copied the text: ' + copyText.value);
		setstate(true);
	};
	return (
		<div className='Copy'>
			{`box-shadow: ${props.shadowStyles};`} <br />
			{`-webkit-box-shadow: ${props.shadowStyles};`} <br />
			{`-moz-box-shadow: ${props.shadowStyles};`}
			<Button
				variant='outlined'
				size='medium'
				id='copyButton'
				onClick={handleCopy}
				startIcon={state ? <AssignmentTurnedInIcon /> : <AssignmentIcon />}>
				Copy
			</Button>
		</div>
	);
};

export default Copy;
