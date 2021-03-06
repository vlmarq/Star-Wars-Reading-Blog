import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { Row, Col, Container, Button } from "react-bootstrap";
import { Stats } from "../component/stats/stats";

export const Single = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	// console.log("PARAMS:", params);
	const [data, setData] = useState({});
	const baseURL = process.env.BASE_URL;
	const type = params.type;
	const id = params.id;

	useEffect(() => {
		fetch(`${baseURL}/${type}/${id}/`)
			.then(response => response.json())
			.then(data => setData(data));
	}, []);
	// if (typeof store.aString == "string") {
	// 	console.log("CONTEXT: ", store.aString);
	// } else {
	// 	console.log("CONTEXT");
	// }
	// const [type, setType] = useState(
	// 	typeof personID !== "undefined" ? "people" : typeof planetID !== "undefined" ? "planets" : "starships"
	// );
	return (
		<Container fluid>
			<Row>
				<Col xs={12} md={6}>
					<img src="https://via.placeholder.com/1000x700/" className="card-img-top" alt="..." />
				</Col>
				<Col xs={12} md={6}>
					<h1 className="display-4">
						{data.name}

						{/* {typeof store[type] !== "undefined" &&
							store[type].length != 0 &&
							// checks which array within store and returns name value
							store[type][type === "people" ? personID : type === "planets" ? planetID : starshipID].name} */}
					</h1>
					<p>
						Lucas ipsum dolor sit amet ben darth bespin windu kessel leia lando dagobah skywalker ponda.
						Moff c-3p0 solo antilles ben kessel. Mandalore wedge jango twilek sith anakin fisto. Twilek
						sidious ewok ventress darth ewok darth jade skywalker. Hutt mandalore maul skywalker darth yoda
						yoda. Hutt moff yavin jade padmé mace yavin skywalker. Sidious ackbar lars jinn solo bespin
						jango. Obi-wan skywalker organa darth watto. Solo calamari dooku darth skywalker darth darth.
						Calamari dooku kessel palpatine vader chewbacca binks anakin amidala.
					</p>
				</Col>
			</Row>

			<hr className="my-4" />

			<Stats
				type={type}
				data={data}
				// data={store[type][type === "people" ? personID : type === "planets" ? planetID : starshipID]}
			/>

			<Link to="/">
				<span className="btn" href="#" role="button">
					Back home
				</span>
			</Link>
		</Container>
	);
};

Single.propTypes = {
	match: PropTypes.object
};
