import React from 'react';

function Header () {
	return (
				// header containg name and icons
			<header className="flex flex-col justify-center items-center h-screen">
				<h1 className="title text-8xl font-bold">Daniel Sapione</h1>
				<p className="text-xl -translate-y-2" >FRONT END DEVELOPER | PORTFOLIO</p>
				{/* line div between name and icons */}
				<div className="border-b-[6px] border-solid border-slate-500 rounded-[3px] w-[26em]"></div>
				{/* icons */}
				<section className="flex justify-evenly w-[10em] mt-[12.5px] text-5xl">
					<a href="https://github.com/dsapione" target="blank">
						<i className="fa-brands fa-square-github duration-500 hover:text-slate-500 hover:ease-in-out"></i>
					</a>
					<a href="mailto:dsapion@gmail.com">
						<i className="fa-solid fa-envelope duration-500 hover:text-slate-500 hover:ease-in-out"></i>
					</a>
					<a href="https://www.linkedin.com/in/daniel-sapione/" target="_blank" rel="noreferrer">
						<i className="fa-brands fa-linkedin duration-500 hover:text-slate-500 hover:ease-in-out"></i>
					</a>
				</section>
				<a className="flex flex-col text-3xl absolute bottom-0 duration-500 opacity-40 hover:opacity-80 hover:ease-in-out" href="#aside">
					<i className="fa-solid fa-chevron-down translate-y-2"></i>
					<i className="fa-solid fa-chevron-down -translate-y-1 bg-transparent"></i>
				</a>
			</header>
	);
};

export default Header;