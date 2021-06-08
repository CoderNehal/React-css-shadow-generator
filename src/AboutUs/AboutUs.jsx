import React from 'react';
import './AboutUs.css';
import { motion } from 'framer-motion';
const AboutUs = () => {
	return (
		<motion.div
			className='AboutUs'
			initial={{ x: -100, opacity: 0 }}
			animate={{
				x: 0,
				opacity: 1,
				transition: {
					duration: 1.6,
				},
			}}>
			<span>CSS BOX SHADOW GENERATOR</span> helps you quickly generate
			box-shadow CSS declarations for your website. It comes with many options
			and it demonstrates instantly. for more tools like this visit{' '}
			<a href='https://github.com/CoderNehal'>here</a>
		</motion.div>
	);
};

export default React.memo(AboutUs);
