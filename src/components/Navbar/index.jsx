import React from "react";
import "./Navbar.css";

const Navbar = () => {
	return (
		<div id='navbar'>
			<p className='fs-16 inter'>
				<a href='#' className='white-text'>
					Sound<span className='red-text'>DZign</span>
				</a>
			</p>

			<ul>
				<li className='fs-16'>
					<a href='#info' className='white-text'>
						About
					</a>
				</li>
				<li className='fs-16'>
					<a href='#topics' className='white-text'>
						Course Details
					</a>
				</li>
				<li className='fs-16'>
					<a href='#blog' className='white-text'>
						Blog
					</a>
				</li>
				<li className='fs-16'>
					<a href='#testimonials' className='white-text'>
						Testimonials
					</a>
				</li>
			</ul>
		</div>
	);
};

export default Navbar;
