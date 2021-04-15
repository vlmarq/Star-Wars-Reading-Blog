import React, { useContext } from "react";
import "../../styles/home.scss";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
// import PropTypes from "prop-types";

export const Home = () => {
	const { store } = useContext(Context);

	return (
		<div className="container text-center mt-5">
			{/* 'Characters' section starts here */}
			<h2 className="text-left">Characters</h2>
			<div className="row d-flex flex-nowrap">
				{store.people.map((person, index) => {
					return (
						<div key={index} className="card col mx-3" style={{ width: "18rem" }}>
							<img src="https://via.placeholder.com/400x200/" className="card-img-top" alt="..." />
							<div className="card-body">
								<h5 className="card-title">{person.name}</h5>
								<div className="card-text text-left">
									<p>Gender: {person.index}</p>
									<p>Hair color: {person.hair_color}</p>
									<p>Eye color: {person.eye_color}</p>
								</div>
								<div className="d-flex justify-content-between">
									<Link to="/" className="btn btn-outline-primary">
										Learn more!
									</Link>
									<button className="btn btn-outline-warning btn-heart">&hearts;</button>
								</div>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};
