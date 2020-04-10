import React from 'react';
import Card from './generic/Card';

const Work = () => {
	const works = [
		{
			title: 'My Web Portfolio',
			summary:
				'A fun project, imbued with minimalism, and a showcase for previous work.',
			techStack: 'React & CSS',
			purpose: 'Personal Interest',
		},
		{
			title: 'E-TIME Quiz-2020',
			summary:
				'A frontend GUI for E-TIME Quiz Interschool - 2020 edition,	held on 24th Jan, 2020.',
			techStack: 'React & CSS',
			purpose: 'Freelance',
		},
		{
			title: 'Unwrapp',
			summary:
				'A Play Store Apps Analyzer, which displayes app trends, and predicts app ratings.',
			techStack: 'HTML & CSS, Python, Django',
			purpose: 'TE-Miniproject',
		},
		{
			title: 'Time Quiz-2019',
			summary:
				'A JavaFX desktop application, for visual interaction in the TIME Quiz-2019 Finale.',
			techStack: 'JavaFX, CSS & XML',
			purpose: 'Freelance',
		},
		{
			title: 'Time Quiz-2018',
			summary:
				'A Java application, for basic visual interaction in the TIME Quiz-2018 Finale.',
			techStack: 'Java, Swing',
			purpose: 'Freelance',
		},
		// {
		// 	title: 'Cybertimes Design',
		// 	summary:
		// 		'A fun project, imbued with minimalism, and a showcase for previous work.',
		// 	purpose: 'Personal',
		// },
	];
	return (
		<div className='work-flex'>
			{works.map((work) => (
				<Card key={work.title} work={work} />
			))}
		</div>
	);
};

export default Work;
