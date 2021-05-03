import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Dropdown } from "react-bootstrap";
import { Context } from "../store/appContext";

export const Navbar = () => {
	const { store, actions } = useContext(Context);

	return (
		<nav className="navbar navbar-light bg-dark mb-3">
			<div className="container">
				<Link to="/">
					<img
						className="logo"
						src="https://static-mh.content.disney.io/starwars/assets/navigation/sw_logo_stacked@2x-52b4f6d33087.png"
						alt="Star Wars Logo"
					/>
				</Link>
				<Dropdown>
					<Dropdown.Toggle variant="primary" id="dropdown-basic" className="btn btn-favorites">
						Favorites <span className="bg-dark p-1 rounded">{store.favorites.length}</span>
					</Dropdown.Toggle>

					<Dropdown.Menu align="right">
						{store.favorites.map((item, index) => {
							return (
								<Dropdown.Item
									className="d-flex justify-content-between align-items-center"
									href="#"
									key={index}
									onClick={() => actions.deleteFavorite(index)}>
									{item}
									<button className="btn">&#128465;</button>
								</Dropdown.Item>
							);
						})}
					</Dropdown.Menu>
				</Dropdown>

				{/* <div className="ml-auto btn-group">
					<button
						className="btn btn-primary btn-sm btn-favorites dropdown-toggle"
						data-bs-toggle="dropdown"
						aria-expanded="false">
						Favorites
					</button>
					<ul className="dropdown-menu dropdown-menu-end">
						<li>
							<button className="dropdown-item" type="button">
								Action
							</button>
						</li>
						<li>
							<button className="dropdown-item" type="button">
								Another action
							</button>
						</li>
						<li>
							<button className="dropdown-item" type="button">
								Something else here
							</button>
						</li>
					</ul>
				</div> */}
			</div>
		</nav>
	);
};
