import React from 'react';
import { Link } from 'react-router-dom';
import graphic from '../assets/svg/intro-graphic.svg';

const Intro = () => {
	return (
		<>
			<div class='intro-flex'>
				<section>
					<div className='intro-text'>
						A student
						<br /> learning to{' '}
						<span style={{ color: '#21B06C', fontSize: 'inherit' }}>
							design
						</span>
						<br />{' '}
						<span style={{ color: '#21B06C', fontSize: 'inherit' }}>
							develop
						</span>
						<br /> &{' '}
						<span style={{ color: '#21B06C', fontSize: 'inherit' }}>
							deploy
						</span>
						<br /> web experiences.
						<br />{' '}
					</div>
					<div className='intro-bottom-link'>
						<Link className='btn-link' to='/my-portfolio-react/work'>
							View Work >
						</Link>
					</div>
				</section>

				<section class='vertical-border'></section>
				<section className='svg-section'>
					<img src={graphic} className='intro-graphic' />
				</section>
			</div>
		</>
	);
};

export default Intro;
