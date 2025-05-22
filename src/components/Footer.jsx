// src/components/Footer.jsx
import React from "react";

const Footer = () => {
	return (
		<footer className="bg-light text-center py-3 mt-4">
			<div className="container">
				<span className="text-muted">© {new Date().getFullYear()} StarWarsBlog</span>
			</div>
		</footer>
	);
};

export default Footer;