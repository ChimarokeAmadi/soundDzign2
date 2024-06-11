import React from "react";
import "./Header.css";
import Navbar from "../Navbar";

const Header = () => {
	return (
		<section id='header'>
			<Navbar />

			<div className='cta'>
				<p className='inter fs-16 red-line'>Sound Design Masterclass</p>
				<h2 className='alegreya fs-40'>Learn the Art of Sound Design</h2>
				<button className='inter fs-16'>Demo Lesson</button>
			</div>
		</section>
	);
};

export default Header;
