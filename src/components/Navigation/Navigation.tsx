import React from "react";
import "./styles.scss";

export const Navigation = () => {
	return (
		<nav className="nav">
			<a className="nav__logo" href="/">THE PLANETS</a>

			<ul className="nav__list">
				<li className="nav__item">
					<a href="#" className="nav__link">
						mercury
					</a>
				</li>
				<li className="nav__item">
					<a href="#" className="nav__link">
						venus
					</a>
				</li>
				<li className="nav__item">
					<a href="#" className="nav__link">
						earth
					</a>
				</li>
				<li className="nav__item">
					<a href="#" className="nav__link">
						mars
					</a>
				</li>
				<li className="nav__item">
					<a href="#" className="nav__link">
						jupiter
					</a>
				</li>
				<li className="nav__item">
					<a href="#" className="nav__link">
						saturn
					</a>
				</li>
				<li className="nav__item">
					<a href="#" className="nav__link">
						uranus
					</a>
				</li>
				<li className="nav__item">
					<a href="#" className="nav__link">
						neptune
					</a>
				</li>
			</ul>
		</nav>
	);
};
