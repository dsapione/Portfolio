/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

function Footer() {
	return (
		// brings you to top of page
		<footer className='flex justify-center clear-both'>
			<a className="duration-500 opacity-40 hover:opacity-80 hover:ease-in-out" href="#">
			<i className="fa-solid fa-chevron-up text-3xl"></i>
			<p className="flex justify-center text-sm -translate-y-2">Top</p>
		</a>
		</footer>
	);
};

export default Footer;