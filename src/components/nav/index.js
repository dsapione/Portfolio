/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

function Nav (props) {
	const setCurrentPage = props.setCurrentPage
	
	return (
		// nav bar on the left of the screen
		<aside id="aside" className='float-left text-4xl font-bold w-max m-4'>
			<nav>
				<ul className="flex flex-col items-center gap-6">
					{props.pages.map(page => (
						<li>
							<a href='#' key={page.name} onClick={() => setCurrentPage(page)}>
								<h2 className="duration-500 hover:text-sky-500 hover:text-5xl hover:ease-in-out"> {page.name} </h2>
							</a>
						</li>
					))}
				</ul>
			</nav>
		</aside>
	);
};

export default Nav;