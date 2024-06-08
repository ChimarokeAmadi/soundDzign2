import React from "react";
import Header from "./components/Header";
import Topics from "./components/Topics";
import Testimonials from "./components/Testimonials";
import Info from "./components/Info";
import Blog from "./components/Blog";
import Footer from "./components/Footer";

const App = () => {
	return (
		<>
			<Header />
			<Topics />
			<Info />
			<Blog />
			<Testimonials />
			<Footer />
		</>
	);
};

export default App;
