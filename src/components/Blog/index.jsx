import React from "react";
import "./Blog.css";
import Daw from "../../assets/Rectangle 13_Topic-images.png";
import Mixing from "../../assets/Thumbnail-guitarguitar.png";
import Vox from "../../assets/Thumbnail_vox.png";

const Blog = () => {
	return (
		<section id='blog'>
			<h2 className='inter fs-40 yellow-line'>Latest Posts</h2>
			<div className='posts-container'>
				<div className='blog-post' id='daw-post'>
					<img src={Daw} alt='' />
					<p className='alegreya fs-18'>
						How To Use Drum Machine in Logic Pro X
					</p>
					<div className='tag fs-13 alegreya'>DAW</div>
				</div>

				<div className='blog-post'>
					<img src={Mixing} alt='' />
					<p className='alegreya fs-18'>How To Mix Guitars Effectively</p>
					<div className='tag fs-13 alegreya'>Mixing</div>
				</div>

				<div className='blog-post' id='span2'>
					<img src={Vox} alt='' />
					<p className='alegreya fs-18'>
						The Real Power of Harmonies in Music Production
					</p>
					<div className='tag fs-13 alegreya'>Vox</div>
				</div>
				<button>
					<a href='#' className='alegreya'>
						All Posts
					</a>
				</button>
			</div>
		</section>
	);
};

export default Blog;
