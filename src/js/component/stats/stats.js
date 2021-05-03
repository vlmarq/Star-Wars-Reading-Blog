import React, { useState, useContext } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Context } from "../../store/appContext";
import { Row, Col, Container, Button } from "react-bootstrap";

export const Stats = props => {
	// console.log("PROPS:", props);
	return (
		<div>
			<Row>
				<>
					{/* People */}
					<Col xs={2}>
						{props.data.height && (
							<>
								<h4>Height:</h4>
								<p>{props.data.height}</p>
							</>
						)}
						{/* Planets */}
						{props.data.climate && (
							<>
								<h4>Climate:</h4>
								<p>{props.data.climate}</p>
							</>
						)}
						{/* Starships */}
						{props.data.model && (
							<>
								<h4>Model:</h4>
								<p>{props.data.model}</p>
							</>
						)}
					</Col>
					<Col xs={2}>
						{/* People */}
						{props.data.mass && (
							<>
								<h4>Mass:</h4>
								<p>{props.data.mass}</p>
							</>
						)}
						{/* Planets */}
						{props.data.population && (
							<>
								<h4>Population:</h4>
								<p>{props.data.population}</p>
							</>
						)}
						{/* Starships */}
						{props.data.starship_class && (
							<>
								<h4>Starship Class:</h4>
								<p>{props.data.starship_class}</p>
							</>
						)}
					</Col>
					<Col xs={2}>
						{/* People */}
						{props.data.birth_year && (
							<>
								<h4>Birth Year:</h4>
								<p>{props.data.birth_year}</p>
							</>
						)}
						{/* Planets */}
						{props.data.terrain && (
							<>
								<h4>Terrain:</h4>
								<p>{props.data.terrain}</p>
							</>
						)}
						{/* Starships */}
						{props.data.manufacturer && (
							<>
								<h4>Manufacturer:</h4>
								<p>{props.data.manufacturer}</p>
							</>
						)}
					</Col>
					<Col xs={2}>
						{/* People */}
						{props.data.gender && (
							<>
								<h4>Gender:</h4>
								<p>{props.data.gender}</p>
							</>
						)}

						{/* Planets */}

						{/* Starships */}
						{props.data.crew && (
							<>
								<h4>Crew:</h4>
								<p>{props.data.crew}</p>
							</>
						)}
					</Col>
					<Col xs={2}>
						{/* People */}
						{props.data.eye_color && (
							<>
								<h4>Hair color:</h4>
								<p>{props.data.eye_color}</p>
							</>
						)}
						{/* Planets */}

						{/* Starships */}
						{props.data.passengers && (
							<>
								<h4>Passengers:</h4>
								<p>{props.data.passengers}</p>
							</>
						)}
					</Col>
					<Col xs={2}>
						{/* People */}
						{props.data.hair_color && (
							<>
								<h4>Hair color:</h4>
								<p>{props.data.hair_color}</p>
							</>
						)}
						{/* Planets */}
						{/* Starships */}
						{props.data.max_atmosphering_speed && (
							<>
								<h4>Max Speed:</h4>
								<p>{props.data.max_atmosphering_speed}</p>
							</>
						)}
					</Col>
				</>
			</Row>
		</div>
	);
};

Stats.propTypes = {
	type: PropTypes.string.isRequired,
	data: PropTypes.object.isRequired
};

export default Stats;
