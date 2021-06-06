import React from 'react';
import './Copy.css';
const Copy = (props) => {
	return (
		<div className='Copy'>
			{`box-shadow: ${props.shadowStyles};`} <br />
			{`-webkit-box-shadow: ${props.shadowStyles};`} <br />
			{`-moz-box-shadow: ${props.shadowStyles};`}
		</div>
	);
};

export default Copy;
