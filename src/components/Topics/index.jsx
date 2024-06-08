import React, { useState } from "react";
import "./Topics.css";
import R13 from "../../assets/Rectangle 13_Topic-images.png";
import R14 from "../../assets/Rectangle 14_Topic-images.png";
import R15 from "../../assets/Rectangle 15_Topic-images.png";
import R16 from "../../assets/Rectangle 16_Topic-images.png";
import R17 from "../../assets/Rectangle 17_Topic-images.png";
import R18 from "../../assets/Rectangle 18_Topic-images.png";
import G7 from "../../assets/Group 7.png";
const Topics = () => {
	const [currentImage, setCurrentImage] = useState(R13);

	return (
		<section id='topics'>
			<h2 className='fs-40 red-line inter'>What will you learn?</h2>
			<div className='topic-list'>
				<ul>
					<li
						className='alegreya fs-20'
						onMouseEnter={() => {
							setCurrentImage(R13);
						}}>
						What are frequencies?
					</li>
					<li
						className='alegreya fs-20'
						onMouseEnter={() => {
							setCurrentImage(R14);
						}}>
						Using DAW
					</li>
					<li
						className='alegreya fs-20'
						onMouseEnter={() => {
							setCurrentImage(R15);
						}}>
						Vocals Processing
					</li>
					<li
						className='alegreya fs-20'
						onMouseEnter={() => {
							setCurrentImage(R16);
						}}>
						Mixing
					</li>
					<li
						className='alegreya fs-20'
						onMouseEnter={() => {
							setCurrentImage(R17);
						}}>
						Mixing Console
					</li>
					<li
						className='alegreya fs-20 mb-0'
						onMouseEnter={() => {
							setCurrentImage(R18);
						}}>
						Mastering
					</li>
				</ul>

				<div className='dynamic-image'>
					<img src={currentImage} alt='' />
					<img src={G7} alt='' className='G7' />
				</div>
			</div>
		</section>
	);
};

export default Topics;
