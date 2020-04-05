import React from 'react';
import profilephoto from '../assets/images/profile-hi-res.JPG';
const About = () => {
	return (
		<>
			<div class='intro-flex' style={{ marginTop: '4vh' }}>
				<section style={{ alignSelf: 'flex-end', width: '40vw' }}>
					<div className='about-large-text'>
						“ Everything <br />
						around you that you
						<br /> call life was made by
						<br /> people no smarter
						<br /> than you. And you
						<br /> can change it. ”<br />
					</div>
					<div className='quoter-text'>- Steve Jobs</div>
				</section>

				<section class='vertical-border'></section>
				<section style={{ alignSelf: 'center', width: '40vw' }}>
					<svg
						width='200'
						height='200'
						viewBox='0 0 200 200'
						style={{ marginLeft: '-1rem' }}
					>
						<defs>
							<clipPath id='circleView'>
								<circle cx='94.5' cy='94.5' r='91.5' />
							</clipPath>
						</defs>
						<circle
							cx='94.5'
							cy='94.5'
							r='93'
							stroke='#0096EA'
							strokeWidth='3'
						/>
						<image
							width='189'
							height='189'
							href={profilephoto}
							clipPath='url(#circleView)'
						/>
					</svg>
					<div
						className='btn-link'
						style={{ fontSize: '1.5rem', marginTop: '1em' }}
					>
						Me
					</div>
					<div className='about-text' style={{ marginTop: '1em' }}>
						I started coding for one single reason,
						<br /> to make products, apps and things I’d myself love to use.
						<br />
						<br /> As of now, I’m learning full stack web development,
						<br /> & I have a predilection for articulate design, aesthetics
						<br /> and user experience.
						<br />
						<br /> I also play piano, photograph wildlife, and play cricket.
					</div>
					<div
						className=' about-footer'
						style={{ marginTop: '4rem', marginBottom: '0.2rem' }}
					>
						Currently, Full Stack Intern at Edgelytics
					</div>
				</section>
			</div>
			{/* <div className='filler-flex-bottom' style={{ flex: 2 }}></div> */}
		</>
	);
};

export default About;
