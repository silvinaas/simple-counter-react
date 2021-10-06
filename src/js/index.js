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
let unidad = 0;
let decena = 0;
let centena = 0;
let milesima = 0;
let milesimax2 = 0;
let milesimax3 = 0;

let temporizar = true;
const resetear = () => {
	contador = 0;
};

const pausar = () => {
	temporizar = false;
};

const reanudar = () => {
	temporizar = true;
};

setInterval(function() {
	milesimax3 = Math.floor(contador / 100000) % 10;
	milesimax2 = Math.floor(contador / 10000) % 10;
	milesima = Math.floor(contador / 1000) % 10;
	centena = Math.floor(contador / 100) % 10;
	decena = Math.floor(contador / 10) % 10;
	unidad = Math.floor(contador) % 10;

	if (temporizar == true) {
		ReactDOM.render(
			<div className="container">
				<Home
					unidad={unidad}
					decena={decena}
					centena={centena}
					milesima={milesima}
					milesimax2={milesimax2}
					milesimax3={milesimax3}
				/>

				<div
					className="btn-group row align-items-center d-flex justify-content-center align-items-center"
					role="group"
					aria-label="Basic example">
					<button
						className="btn btn-warning col-1 "
						onClick={resetear}
						type="button">
						Resetear
					</button>
					<button
						className="btn btn-danger col-1"
						onClick={pausar}
						type="button">
						Pausar
					</button>
					<button
						className="btn btn-success col-1"
						onClick={reanudar}
						type="button">
						Reanudar
					</button>
				</div>
			</div>,
			document.querySelector("#app")
		);
		contador++;
	}
}, 1000);
//render your react application
