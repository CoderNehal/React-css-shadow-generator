import React, { useState } from 'react';
import styled from 'styled-components';
import './BOX.css';
import copy from 'copy-to-clipboard';
const BOX = (props) => {
	const [state, setstate] = useState(`#${props.indx}`);
	const Div = styled.button`
		${props.shadow}
	`;

	const handleCopy = () => {
		copy(props.shadow);
		setstate('copied!');
		setTimeout(() => {
			setstate(`#${props.indx}`);
		}, 1000);
	};
	return (
		<Div className='BOX' onClick={handleCopy}>
			{state}
		</Div>
	);
};

export default BOX;
