import React from "react";
import PropTypes from "prop-types";

//include images into your bundle
//import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = (props) => {
	return (
		<div>
			<h1>{props.contador}</h1>
			<h1>{props.contador}</h1>
		</div>
	);
};

Home.propTypes = {
	contador = PropTypes.number
}

export default Home;
