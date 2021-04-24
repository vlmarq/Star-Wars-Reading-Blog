import React, { useState, useContext } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const CardRow = props => {
	// const { store } = useContext(Context);

	// const params = useParams();

	// const personID = params.personID;
	// const planetID = params.planetID;
	// const starshipID = params.starshipID;

	// const [type, setType] = useState(
	// 	typeof personID !== "undefined" ? "people" : typeof planetID !== "undefined" ? "planets" : "starships"
	// );

	return (
		<>
			<h2 className="text-left mt-5">{props.title}</h2>
			<div className="row d-flex flex-nowrap">
				{props.data.map((item, index) => {
					return (
						<div key={index} className="card col mx-3 p-0" style={{ width: "18rem" }}>
							<img src="https://via.placeholder.com/400x200/" className="card-img-top" alt="..." />
							<div className="card-body">
								<h5 className="card-title">{item.name}</h5>
								<div className="card-text text-left">Some data</div>
								<div className="d-flex justify-content-between">
									<Link to={"/"} className="btn btn-outline-primary">
										Learn more!
									</Link>
									<button className="btn btn-outline-warning btn-heart">&hearts;</button>
								</div>
							</div>
						</div>
					);
				})}
			</div>
		</>
	);
};

CardRow.propTypes = {
	title: PropTypes.string.isRequired,
	data: PropTypes.array.isRequired
};

export default CardRow;
