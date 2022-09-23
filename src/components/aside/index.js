import React from 'react';

function Aside () {
	return (
		<aside id="aside">
			<nav class="text-4xl font-bold">
				<ul class="flex flex-col w-max ml-3 gap-6">
					<li>
						<a href="">
							<h2 class="duration-500 hover:text-slate-500 hover:ease-in-out"> ABOUT </h2>
						</a>
					</li>

					<li>
						<a href="">
							<h2 class="duration-500 hover:text-slate-500 hover:ease-in-out"> SKILLS </h2>
						</a>
					</li>

					<li>
						<a href="">
							<h2 class="duration-500 hover:text-slate-500 hover:ease-in-out"> PROJECTS </h2>
						</a>	
					</li>
					<li>
						<a href="">
							<h2 class="duration-500 hover:text-slate-500 hover:ease-in-out"> RESUME </h2>
						</a>
					</li>

					<li>
						<a href="">
							<h2 class="duration-500 hover:text-slate-500 hover:ease-in-out"> CONTACT </h2>
						</a>
					</li>
				</ul>
			</nav>
		</aside>
	);
};

export default Aside;