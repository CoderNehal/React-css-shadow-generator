import React, { useEffect, useState } from 'react';
import './Copy.css';
import AssignmentIcon from '@material-ui/icons/Assignment';
import Button from '@material-ui/core/Button';
import copy from 'copy-to-clipboard';
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';
import { motion } from 'framer-motion';
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
	useEffect(() => {
		setstate(false);
	}, [props]);
	return (
		<motion.div
			className='Copy'
			initial={{ x: 100, opacity: 0 }}
			animate={{
				x: 0,
				opacity: 1,
				transition: {
					duration: 1.6,
					delay: 0.6,
				},
			}}>
			<input
				type='text'
				style={{ display: 'none' }}
				id='copy'
				value={textToCopy}
				readOnly
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
		</motion.div>
	);
};

export default Copy;
