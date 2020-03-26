import React from 'react';
import { Link } from 'react-router-dom';

const Intro = () => {
	return (
		<div class='intro-flex'>
			<section class='intro-text'>
				A student
				<br /> learning to <b style={{ color: '#21B06C' }}>design</b>
				<br /> <b style={{ color: '#21B06C' }}>develop</b>
				<br /> & <b style={{ color: '#21B06C' }}>deploy</b>
				<br /> engaging experiences.
				<br /> <Link className='btn-link'>View Work ></Link>
			</section>

			<section class='vertical-border'></section>

			<svg
				width='432'
				height='432'
				viewBox='0 0 432 432'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'
			>
				<path
					d='M216 0L342.962 41.2523L421.428 149.252V282.748L342.962 390.748L216 432L89.0384 390.748L10.5718 282.748V149.252L89.0384 41.2523L216 0Z'
					fill='#00914C'
				/>
				<path
					d='M215.5 49L313.366 80.7987L373.851 164.049V266.951L313.366 350.201L215.5 382L117.634 350.201L57.1491 266.951V164.049L117.634 80.7987L215.5 49Z'
					fill='#00BD63'
				/>
				<path
					d='M216 104L281.832 125.295L322.518 181.045V249.955L281.832 305.705L216 327L150.168 305.705L109.482 249.955V181.045L150.168 125.295L216 104Z'
					fill='#38FFA1'
				/>
			</svg>
		</div>
	);
};

export default Intro;
