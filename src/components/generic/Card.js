import React from 'react';
import { Link } from 'react-router-dom';

const Card = () => {
	return (
		<div className='card'>
			<div className='card-inner-square'></div>
			<div className='card-title'>My Web Portfolio</div>
			<div className='card-summary'>
				This is sample summary that I developed in order to test the given block
				of text.
			</div>
			<Link className='btn-link'>View Code</Link>
		</div>
	);
};

export default Card;
