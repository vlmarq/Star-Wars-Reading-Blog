import React, { useState, useContext } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Context } from "../../store/appContext";
import { Row, Col, Container, Button } from "react-bootstrap";

export const Stats = props => {
	return (
		<div>
			<Row>
				{props.type === "people" ? (
					<>
						<Col xs={2}>
							<h3>Height: {props.data.height}</h3>
						</Col>
					</>
				) : props.type === "planet" ? (
					<Col xs={2}></Col>
				) : (
					<Col xs={2}></Col>
				)}
			</Row>
		</div>
	);
};

Stats.propTypes = {
	type: PropTypes.string.isRequired,
	data: PropTypes.array.isRequired
};

export default Stats;
