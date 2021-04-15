import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-dark mb-3">
			<div className="container">
				<Link to="/demo">
					<img
						className="logo"
						src="https://static-mh.content.disney.io/starwars/assets/navigation/sw_logo_stacked@2x-52b4f6d33087.png"
						alt="Star Wars Logo"
					/>
				</Link>

				<div className="ml-auto btn-group">
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
				</div>
			</div>
		</nav>
	);
};
