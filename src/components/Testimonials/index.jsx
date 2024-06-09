import React from "react";
import "./Testimonials.css";
import peter from "../../assets/peter-adams_peter.png";
import robert from "../../assets/robert-fox_robert.png";
import emily from "../../assets/emily-smith_emily.png";

const Testimonials = () => {
	return (
		<section id='testimonials'>
			<h2 className='fs-40 inter red-line'>What our students say?</h2>
			<div className='testimonials-container'>
				<div className='student-info'>
					<img src={peter} alt='' className='student-image' />
					<div className='student-details'>
						<p className='student-name alegreya fs-20'>Peter Adams</p>
						<p className='student-testimonial fs-16 alegreya'>
							This is a great course. I got to learn a lot.
						</p>
					</div>
				</div>

				<div className='student-info'>
					<img src={robert} alt='' className='student-image' />
					<div className='student-details'>
						<p className='student-name alegreya fs-20'>Robert Fox</p>
						<p className='student-testimonial fs-16 alegreya'>
							I got to learn a lot about Music Production with this course.
							Thanks :)
						</p>
					</div>
				</div>

				<div className='student-info'>
					<img src={emily} alt='' className='student-image' />
					<div className='student-details'>
						<p className='student-name alegreya fs-20'>Emily Smith</p>
						<p className='student-testimonial fs-16 alegreya'>
							Awesome! Great job!!
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Testimonials;
