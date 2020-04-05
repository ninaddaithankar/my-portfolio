import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = (props) => {
	return (
		<div class='navbar'>
			<NavLink exact to='/' activeClassName='logo logo-active' className='logo'>
				Ninad Daithankar
			</NavLink>
			<ul className='nav-list'>
				<li>
					<NavLink
						exact
						to='/work'
						activeClassName='nav-list-link link-active'
						className='nav-list-link'
					>
						Work
					</NavLink>
				</li>
				<li>
					<NavLink
						exact
						to='/about'
						activeClassName='nav-list-link link-active'
						className='nav-list-link'
					>
						About
					</NavLink>
				</li>
				<li>
					<Link className='nav-list-link'>Contact</Link>
				</li>
			</ul>
		</div>
	);
};

export default Navbar;
