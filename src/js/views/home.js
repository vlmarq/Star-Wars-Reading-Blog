import React, { useContext } from "react";
import "../../styles/home.scss";
import { Context } from "../store/appContext";
import CardRow from "../component/cardRow";

export const Home = () => {
	const { store } = useContext(Context);

	return (
		<div className="container">
			<CardRow title="Characters" data={store.people} />
			<CardRow title="Planets" data={store.planets} />
			<CardRow title="Starships" data={store.starships} />
		</div>
	);
};
