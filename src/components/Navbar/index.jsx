import React from "react";
import "./Navbar.css";

const Navbar = () => {
	return (
		<div id='navbar'>
			<p className='fs-16 inter'>
				<a href=''>
					Sound<span>DZign</span>
				</a>
			</p>

			<ul>
				<li className='fs-16'>
					<a href='#info'>About</a>
				</li>
				<li className='fs-16'>
					<a href='#topics'>Course Details</a>
				</li>
				<li className='fs-16'>
					<a href='#blog'>Blog</a>
				</li>
				<li className='fs-16'>
					<a href='#testimonials'>Testimonials</a>
				</li>
			</ul>
		</div>
	);
};

export default Navbar;
