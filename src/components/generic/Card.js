import React from 'react';

const Card = (props) => {
	const { title, summary, techStack, purpose, image, link } = props.work;
	return (
		<div
			className='card'
			// style={{
			// 	background: `url(${image}) no-repeat center`,
			// 	backgroundSize: '100%',
			// }}
		>
			<img
				className='loading card-image'
				src={image}
				alt='work-display'
				style={{ width: '100%' }}
			/>
			<div className='card-text-section' style={{ opacity: 1 }}>
				<div className='card-title'>{title}</div>
				<div className='card-summary'>{summary}</div>
				<div className='card-subtitle-info'>
					<div className='card-sub-section'>
						<div className='card-subtitle'>Tech Stack</div>
						<div className='card-text'>{techStack}</div>
					</div>
					<div className='card-sub-section'>
						<div className='card-subtitle'>Purpose</div>
						<div className='card-text'>{purpose}</div>
					</div>
				</div>
				<a
					href={link}
					target='_blank'
					rel='noopener noreferrer'
					className='btn-link'
					style={{ marginTop: '2em' }}
				>
					View Repository
				</a>
			</div>
		</div>
	);
};

export default Card;
