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
		<aside id="aside" className='sm:flex sm:justify-center md:m-3 lg:float-left text-4xl font-bold lg:w-max lg:m-4'>
			<nav>
				<ul className="flex lg:flex-col items-center gap-6">
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