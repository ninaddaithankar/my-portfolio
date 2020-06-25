import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = (props) => {
	return (
		<div className='navbar'>
			<NavLink
				exact
				to='/my-portfolio-react'
				activeClassName='logo logo-active'
				className='logo'
			>
				Ninad Daithankar
			</NavLink>
			<ul className='nav-list'>
				<li>
					<NavLink
						exact
						to='/my-portfolio-react/work'
						activeClassName='nav-list-link link-active'
						className='nav-list-link'
					>
						Work
					</NavLink>
				</li>
				<li>
					<NavLink
						exact
						to='/my-portfolio-react/about'
						activeClassName='nav-list-link link-active'
						className='nav-list-link'
					>
						About
					</NavLink>
				</li>
				<li>
					<NavLink
						exact
						to='/my-portfolio-react/contact'
						activeClassName='nav-list-link link-active'
						className='nav-list-link'
					>
						Contact
					</NavLink>
				</li>
			</ul>
		</div>
	);
};

export default Navbar;
