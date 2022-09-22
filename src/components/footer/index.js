/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

function Footer() {
	return (
		<footer className='flex justify-center'>
			<a class="transition duration-500 opacity-40 hover:opacity-80 hover:ease-in-out" href="#">
			<i class="fa-solid fa-chevron-up text-3xl"></i>
			<p class="flex justify-center text-sm -translate-y-2 bg-transparent ">Top</p>
		</a>
		</footer>
	);
};

export default Footer;