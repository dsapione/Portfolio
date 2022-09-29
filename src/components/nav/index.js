import React from 'react';
import { Link } from 'react-router-dom';

function Nav () {

	const pages = [
		{
			name: 'ABOUT'
		},
		{
			name: 'SKILLS'
		},
		{
			name: 'PROJECTS'
		},
		{
			name: 'RESUME'
		},
		{
			name: 'CONTACT'
		}
	];
	
	return (
		// nav bar on the left of the screen
		<aside id="aside" className='float-left text-4xl font-bold w-max m-4'>
			<nav>
				<ul className="flex flex-col items-center gap-6">
					{pages.map(page => (
						<li>
							<Link to={page.name} key={page.name}>
								<h2 className="duration-500 hover:text-sky-500 hover:text-5xl hover:ease-in-out"> {page.name} </h2>
							</Link>
						</li>
					))}
				</ul>
			</nav>
		</aside>
	);
};

export default Nav;