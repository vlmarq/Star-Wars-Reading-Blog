import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";
import CardRow from "../component/cardRow";

import "../../styles/home.scss";

export const Home = props => {
	const { store, actions } = useContext(Context);
	// const params = useParams();
	// const [data, setData] = useState({});
	// const baseURL = process.env.BASE_URL;
	// const type = params.type;
	// const id = params.id;

	// useEffect(() => {
	// 	fetch(`${baseURL}/${type}/${id}`)
	// 		.then(response => response.json())
	// 		.then(data => setData(data.result.properties));
	// }, []);

	return (
		<div className="container">
			<CardRow title="Characters" type="people" data={store.people} />
			<CardRow title="Planets" type="planets" data={store.planets} />
			<CardRow title="Starships" type="starships" data={store.starships} />
		</div>
	);
};
