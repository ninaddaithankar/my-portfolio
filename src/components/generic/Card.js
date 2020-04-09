import React from 'react';
import { Link } from 'react-router-dom';

const Card = (props) => {
	const { title, summary, techStack, purpose } = props.work;
	return (
		<div className='card'>
			<div className='card-inner-square'></div>
			<div className='card-title'>{title}</div>
			{/* <div className='card-subtitle'>Summary</div> */}
			<div className='card-text'>{summary}</div>
			<div className='card-subtitle'>Tech Stack</div>
			<div className='card-text'>{techStack}</div>
			<div className='card-subtitle'>Purpose</div>
			<div className='card-text'>{purpose}</div>
			<Link className='btn-link' style={{ marginTop: '2em' }}>
				View Code
			</Link>
		</div>
	);
};

export default Card;
