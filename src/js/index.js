//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

//include bootstrap npm library into the bundle
import "bootstrap";

//include your index.scss file into the bundle
import "../styles/index.scss";

//import your own components
import Home from "./component/home.jsx";

let contador = 0;
setInterval(function() {
	ReactDOM.render(
		<Home contador={contador} contador2={contador} />,
		document.querySelector("#app")
	);
	contador++;
}, 1000);
//render your react application
