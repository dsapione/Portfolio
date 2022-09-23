import React from 'react';

function Aside (props) {
	const setCurrentPage = props.setCurrentPage
	
	return (
		<aside id="aside">
			<nav className="text-4xl font-bold">
				<ul className="flex flex-col w-max ml-3 gap-6">
					{props.pages.map(page => (
						<li>
							<a href="#" key={page.name} onClick={() => setCurrentPage(page)}>
								<h2 className="duration-500 hover:text-slate-500 hover:ease-in-out"> {page.name} </h2>
							</a>
						</li>
					))}
				</ul>
			</nav>
		</aside>
	);
};

export default Aside;