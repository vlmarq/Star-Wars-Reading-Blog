import React, { useState, useContext } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const CardRow = props => {
	const { actions } = useContext(Context);
	return (
		<>
			<h2 className="text-left mt-5">{props.title}</h2>
			<div className="row d-flex flex-nowrap">
				{props.data.map((item, index) => {
					const id = item.url[item.url.length - 2];
					return (
						<div key={index} className="card col mx-3 p-0" style={{ width: "18rem" }}>
							<img src="https://via.placeholder.com/400x200/" className="card-img-top" alt="..." />
							<div className="card-body">
								<h5 className="card-title pb-2">{item.name}</h5>
								<div className="card-text text-left">
									{props.type == "people" && (
										<>
											<p>
												<strong>Gender:</strong> {item.gender}
											</p>
											<p>
												<strong>Hair color:</strong> {item.hair_color}
											</p>
											<p>
												<strong>Eye color:</strong> {item.eye_color}
											</p>
										</>
									)}
									{props.type == "planets" && (
										<>
											<p>
												<strong>Population:</strong> {item.population}
											</p>
											<p>
												<strong>Climate:</strong> {item.climate}
											</p>
											<p>
												<strong>Terrain:</strong> {item.terrain}
											</p>
										</>
									)}
									{props.type == "starships" && (
										<>
											<p>
												<strong>Model:</strong> {item.model}
											</p>
											<p>
												<strong>Hyperdrive rating:</strong> {item.hyperdrive_rating}
											</p>
											<p>
												<strong>Starship class:</strong> {item.starship_class}
											</p>
										</>
									)}
								</div>
								<div className="d-flex justify-content-between">
									{/* "/people/:personID/:type" */}
									<Link to={`/${props.type}/${id}`} className="btn btn-outline-primary">
										Learn more!
									</Link>
									<button
										className="btn btn-outline-warning btn-heart"
										onClick={() => actions.addFavorite(item)}>
										&hearts;
									</button>
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
	data: PropTypes.array.isRequired,
	type: PropTypes.string.isRequired
};

export default CardRow;
