import React from "react";
import "./index.css";

export default ({img, imgalt, brandLabel, children}, ...props) => {
	return (
		<header className="Header">
			<span className="Brand">
				{img && <img src={img} alt={imgalt}/>}
				<span>{brandLabel}</span>
			</span>
			<span className="Navigation">
				{children}
			</span>
		</header>
	);
}
