import React from 'react';

function Header () {
	return (
				// header containg name and icons
			<header class="flex flex-col justify-center items-center h-screen">
				<h1 class="title text-8xl font-bold">Daniel Sapione</h1>
				<p class="text-xl -translate-y-2" >FRONT END DEVELOPER | PORTFOLIO</p>
				{/* line div between name and icons */}
				<div class="border-b-[6px] border-solid border-slate-500 rounded-[3px] w-[26em]"></div>
				{/* icons */}
				<section class="flex justify-evenly w-[10em] mt-[12.5px] text-5xl">
					<a href="https://github.com/dsapione" target="blank">
						<i class="fa-brands fa-square-github duration-500 hover:text-slate-500 hover:ease-in-out"></i>
					</a>
					<a href="mailto:dsapion@gmail.com">
						<i class="fa-solid fa-envelope duration-500 hover:text-slate-500 hover:ease-in-out"></i>
					</a>
					<a href="https://www.linkedin.com/in/daniel-sapione/" target="_blank" rel="noreferrer">
						<i class="fa-brands fa-linkedin duration-500 hover:text-slate-500 hover:ease-in-out"></i>
					</a>
				</section>
				<a class="flex flex-col text-3xl absolute bottom-0 duration-500 opacity-40 hover:opacity-80 hover:ease-in-out" href="#aside">
					<i class="fa-solid fa-chevron-down translate-y-2"></i>
					<i class="fa-solid fa-chevron-down -translate-y-1 bg-transparent"></i>
				</a>
			</header>
	);
};

export default Header;