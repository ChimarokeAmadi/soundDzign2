import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
	const [isActive, setIsActive] = useState(false);

	const openMenu = () => {
		setIsActive(true);
		console.log("clicked");
	};

	const closeMenu = () => {
		setIsActive(false);
	};

	return (
		<>
			<div id='navbar'>
				<p className='fs-16 inter'>
					<a href='#' className='white-text'>
						Sound<span className='red-text'>DZign</span>
					</a>
				</p>

				<ul className='nav-list'>
					<li className='fs-16 inter'>
						<a href='#info' className='white-text'>
							About
						</a>
					</li>
					<li className='fs-16 inter'>
						<a href='#topics' className='white-text'>
							Course Details
						</a>
					</li>
					<li className='fs-16 inter'>
						<a href='#blog' className='white-text'>
							Blog
						</a>
					</li>
					<li className='fs-16 inter'>
						<a href='#testimonials' className='white-text'>
							Testimonials
						</a>
					</li>
				</ul>
				<div className='menu-icon' onClick={openMenu}>
					<svg
						width='36'
						height='27'
						viewBox='0 0 36 27'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'>
						<rect x='8' y='8' width='20' height='3' rx='1.5' fill='#D9D9D9' />
						<rect x='8' y='16' width='20' height='3' rx='1.5' fill='#D9D9D9' />
					</svg>
				</div>
			</div>
			<div className={`menu-items ${isActive ? "active" : ""}`}>
				<ul className='menu-list'>
					<li>
						<a
							href='#info'
							className='fs-16 white-text inter'
							onClick={closeMenu}>
							About
						</a>
					</li>
					<li>
						<a
							href='#topics'
							className='fs-16 white-text inter'
							onClick={closeMenu}>
							Course Details
						</a>
					</li>
					<li>
						<a
							href='#blog'
							className='fs-16 white-text inter'
							onClick={closeMenu}>
							Blog
						</a>
					</li>
					<li>
						<a
							href='#testimonials'
							className='fs-16 white-text inter'
							onClick={closeMenu}>
							Testimonials
						</a>
					</li>
				</ul>
				<div className='close-icon' onClick={closeMenu}>
					<svg
						width='32'
						height='32'
						viewBox='0 0 32 32'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'>
						<path
							d='M8.46391 23.5432C7.84536 22.9342 7.84536 21.9467 8.46391 21.3377L21.1569 8.83964C21.7755 8.2306 22.7783 8.2306 23.3969 8.83964C24.0154 9.44868 24.0154 10.4361 23.3969 11.0452L10.7039 23.5432C10.0853 24.1523 9.08245 24.1523 8.46391 23.5432Z'
							fill='white'
						/>
						<path
							d='M8.60313 8.45678C9.22168 7.84774 10.2245 7.84774 10.8431 8.45678L23.5361 20.9548C24.1546 21.5639 24.1546 22.5513 23.5361 23.1604C22.9175 23.7694 21.9147 23.7694 21.2961 23.1604L8.60313 10.6623C7.98459 10.0533 7.98459 9.06582 8.60313 8.45678Z'
							fill='white'
						/>
					</svg>
				</div>
			</div>
		</>
	);
};

export default Navbar;
