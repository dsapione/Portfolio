import React from 'react';
import { NavLink } from 'react-router-dom';

function Nav () {

	const pages = [
		{
			name: 'ABOUT',
			link: '/'
		},
		{
			name: 'SKILLS',
			link: '/skills'
		},
		{
			name: 'PROJECTS',
			link: '/projects'
		},
		{
			name: 'RESUME',
			link: '/resume'
		},
		{
			name: 'CONTACT',
			link: '/contact'
		}
	];
	
	return (
		// nav bar on the left of the screen
		<aside id="aside" className='float-left text-4xl font-bold w-max m-4'>
			<nav>
				<ul className="flex flex-col items-center gap-6">
					{pages.map(page => (
						<li>
							<NavLink to={page.link} end={true} key={page.name} className={({ isActive }) => (isActive ? 'active' : 'inactive')}>
								<h2> {page.name} </h2>
							</NavLink>
						</li>
					))}
				</ul>
			</nav>
		</aside>
	);
};

export default Nav;