import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = props => {
	return (
		<nav class='navbar'>
			<span class='logo'>Ninad Daithankar</span>
			<ul class='nav-list'>
				<li>
					<Link>Work</Link>
				</li>
				<li>
					<Link>About</Link>
				</li>
				<li>
					<Link>Contact</Link>
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;
