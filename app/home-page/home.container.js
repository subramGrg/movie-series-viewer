import React from "react";
import { Link } from "react-router-dom";

import { Title } from "helpers";
import "./home.scss";

class Home extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return <React.Fragment>
			<Title>
				<h1 
					className="container"
					styleName="title">
					popular titles
				</h1>
			</Title>

			<div 
				styleName="main__container"
				className="container">

				<div
					styleName="link_container">
					<Link 
						to="/series"
						styleName="link">
						Series
					</Link>
					<span>Popular Series</span>
				</div>

				<div
					styleName="link_container">
					<Link 
						to="/movies"
						styleName="link">
						Movies
					</Link>
					Popular Movies
				</div>
			</div>
		</React.Fragment>;
	}
}

export default Home;