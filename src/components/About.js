import React from 'react';
import profilephoto from '../assets/images/profile-hi-res.JPG';
const About = () => {
	return (
		<>
			<section class='vertical-border-real'></section>
			<div class='about-flex'>
				<section style={{ alignSelf: 'flex-end', width: '40vw' }}>
					<div className='about-large-text'>
						“ Everything <br />
						around you that you
						<br /> call life was made by
						<br /> people no smarter
						<br /> than you. And you
						<br /> can change it. ”
					</div>
					<div className='quoter-text' style={{ marginTop: '1.8em' }}>
						- Steve Jobs
					</div>
				</section>
				<section className='vertical-border-shadow'></section>

				<section className='about-right-section'>
					<div className='about-profile-photo'>
						<svg width='100%' height='100%' viewBox='0 0 189 189'>
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
					</div>
					<div
						className='btn-link about-me-text'
						style={{ fontSize: '1.5rem', marginTop: '1em' }}
					>
						Me
					</div>
					<div className='about-text' style={{ marginTop: '1em' }}>
						I code for one single reason,
						<br /> to make products, apps and things I’d myself love to use.
					</div>
					<div className='about-text' style={{ marginTop: '1em' }}>
						As of now, I’m into the esoteric world of deep learning,
						<br /> with prior experience in designing & developing
						<br /> web-apps using React.
					</div>
					<div className='about-text' style={{ marginTop: '1em' }}>
						I also play piano, photograph wildlife and play cricket.
					</div>
					<div
						className=' about-footer'
						style={{ marginTop: '3em', marginBottom: '0.2rem' }}
					>
						Ex-Web Dev Intern at{' '}
						<a
							href='https://www.edgelytics.in'
							target='_blank'
							rel='noopener noreferrer'
							style={{
								borderBottom: '2px solid cornflowerblue',
								fontSize: 'inherit',
							}}
						>
							Edgelytics
						</a>
					</div>
				</section>
			</div>
			{/* <div className='filler-flex-bottom' style={{ flex: 2 }}></div> */}
		</>
	);
};

export default About;
