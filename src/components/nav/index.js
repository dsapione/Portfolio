import React from 'react';
import { NavLink } from 'react-router-dom';
import { Dropdown } from 'react-bootstrap'

function Nav (props) {

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
		// <aside id="aside" className='sm:flex sm:justify-center md:m-3 lg:float-left text-4xl font-bold lg:w-max lg:m-4'>
		// 	<nav>
		// 		<ul className="flex lg:flex-col items-center gap-6">
		// 			{pages.map(page => (
		// 				<li>
		// 					<NavLink to={page.link} end={true} key={page.name} className={({ isActive }) => (isActive ? 'active' : 'inactive')}>
		// 						<h2> {page.name} </h2>
		// 					</NavLink>
		// 				</li>
		// 			))}
		// 		</ul>
		// 	</nav>
		// </aside>

		<Dropdown>
			<Dropdown.Toggle variant="link" id="dropdown-basic">
				{props.selectedItem}
			</Dropdown.Toggle>			
				<Dropdown.Menu>
					{pages.map(page => (
						<Dropdown.Item
							as={NavLink}
							to={page.link}
							end={true}
							onClick={() => props.setSelectedItem(page.name)}
							key={page.name}
							className={({ isActive }) => (isActive ? 'active' : 'inactive')}
							>{page.name}</Dropdown.Item>
					))}
				</Dropdown.Menu>
		</Dropdown>
	);
};

export default Nav;