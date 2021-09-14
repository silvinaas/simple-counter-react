import React from "react";
import PropTypes from "prop-types";

//include images into your bundle
//import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = props => {
	return (
		<div className="contador">
			<div className="reloj">
				<i className="far fa-clock fa-3x"></i>
			</div>
			<div className="numerito">
				<h1>{props.milesimax3}</h1>
			</div>
			<div className="numerito">
				<h1>{props.milesimax2}</h1>
			</div>
			<div className="numerito">
				<h1>{props.milesima}</h1>
			</div>
			<div className="numerito">
				<h1>{props.centena}</h1>
			</div>
			<div className="numerito">
				<h1>{props.decena}</h1>
			</div>
			<div className="numerito">
				<h1>{props.unidad}</h1>
			</div>
			<div>
				<button id="botones" className="boton" onClick="clickHandler">
					Restart
				</button>
			</div>
		</div>
	);
};

Home.propTypes = {
	unidad: PropTypes.number,
	decena: PropTypes.number,
	centena: PropTypes.number,
	milesima: PropTypes.number,
	milesimax2: PropTypes.number,
	milesimax3: PropTypes.number
};

export default Home;
