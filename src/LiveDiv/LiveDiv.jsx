import React from 'react';
import './LiveDiv.css';
import { motion } from 'framer-motion';
const LiveDiv = (props) => {
	return (
		<motion.div className='LiveDiv'initial={{ x: 100, opacity: 0 }}
		animate={{
			x: 0,
			opacity: 1,
			transition: {
				duration: 1.6,
			},
		}}>
			<div
				className='box'
				style={{
					boxShadow: `${props.shadowStyles}`,
					
				}}>
				{props.shadowStyles}
				{props.opacity}
			</div>
		</motion.div>
	);
};

export default LiveDiv;
