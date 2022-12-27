import React from "react";
import Mercury from "../../../assets/images/1.svg";


export const Main = () => {
	return (
		<main className="main">
			<div className="img-wrapper">
				<img src={Mercury} alt="mercury" />
			</div>

			<div className="content">
				<h1 className="content__heading">Mercury</h1>
				<p className="content__description">
					Mercury is the smallest planet in the Solar System and the closest to the Sun. Its orbit around the Sun takes 87.97 Earth days, the shortest of all the Sun's planets.
					Mercury is one of four terrestrial planets in the Solar System, and is a rocky body like Earth.
				</p>
				<p className="content__source">
					<span className="content__source-text">Source: </span>
					<a className="content__source-link" href="#">
						Wikipedia
					</a>
				</p>
				<ul className="tab__list">
					<li className="tab__item tab__item--active">
						<span className="tab__number">01</span>Overview
					</li>
					<li className="tab__item">
						<span className="tab__number">02</span>Internal structure
					</li>
					<li className="tab__item">
						<span className="tab__number">03</span>Surface geology
					</li>
				</ul>
			</div>
		</main>
	);
};
