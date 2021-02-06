//import react into the bundle
import ReactDOM from "react-dom";
import React, { useState } from "react";

//include bootstrap npm library into the bundle
import "bootstrap";

//include your index.scss file into the bundle
import "../styles/index.scss";

const Traffic = () => {
	const [color, setColor] = useState("");
	return (
		<>
			<div className="trafficTop"></div>
			<div className="container">
				<div
					className={`red ${color === "red" ? "selected" : ""}`}
					onClick={() => setColor("red")}></div>
				<div
					className={`yellow ${color === "yellow" ? "selected" : ""}`}
					onClick={() => setColor("yellow")}></div>
				<div
					className={`green ${color === "green" ? "selected" : ""}`}
					onClick={() => setColor("green")}></div>
			</div>
		</>
	);
};

export default Traffic;

//render your react application
ReactDOM.render(<Traffic />, document.querySelector("#app"));
