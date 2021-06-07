import React from 'react';
import styled from 'styled-components';
import './BOX.css';
const BOX = (props) => {
	const Div = styled.button`
		${props.shadow}
	`;
	const textToCopy = props.shadow;
	const handleCopy = () => {
		var copyText = textToCopy;
		console.log(copyText);
		document.execCommand('copy');
	};
	return (
		<Div className='BOX' onClick={handleCopy}>
			#{props.indx}
			
		</Div>
	);
};

export default BOX;
