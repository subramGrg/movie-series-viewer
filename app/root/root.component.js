import React from "react";
import {
	BrowserRouter as Router,
	Route
} from "react-router-dom";

import Home from "home-page/home.container";
import Header from "header";
import Footer from "footer";
import Series from "series-page/series.container";
import Movies from "movies-page/movies.container";

import "./root.scss";

class Root extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return <Router>
				<React.Fragment>
					<Header />

					<div styleName="main">
						<Route exact path="/" component={Home} />
						<Route path="/series" component={Series} />
						<Route path="/movies" component={Movies} />
					</div>

					<Footer />
				</React.Fragment>
			</Router>
	}
}

export default Root;