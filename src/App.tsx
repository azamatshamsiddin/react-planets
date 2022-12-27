import { Navigation } from "./components/Navigation/Navigation";
import { Main } from "./components/Navigation/Main/Main";
import "./App.scss";

function App() {
	return (
		<div className="App">
			<Navigation />
			<div className="container">
				<Main />

				<div className="info">
					<div className="info__box">
						<h3 className="info__title">ROTATION TIME</h3>
						<p className="info__number">58.6 days</p>
					</div>
					<div className="info__box">
						<h3 className="info__title">REVOLUTION TIME</h3>
						<p className="info__number">87.97 days</p>
					</div>
					<div className="info__box">
						<h3 className="info__title">Radius</h3>
						<p className="info__number">2,439.7 km</p>
					</div>
					<div className="info__box">
						<h3 className="info__title">AVERAGE TEMP</h3>
						<p className="info__number">430°c</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
