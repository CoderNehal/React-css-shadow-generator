import React from 'react';
import './LiveDiv.css';
const LiveDiv = (props) => {
	return (
		<div className='LiveDiv'>
			<div
				className='box'
				style={{
					boxShadow: `${props.shadowStyles}`,
					
				}}>
				{props.shadowStyles}
				{props.opacity}
			</div>
		</div>
	);
};

export default LiveDiv;
