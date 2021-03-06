import React from "react";
import axios from "axios";

import { Title } from "helpers";
import _ from "../../lib/underscore";
import "./movies.scss";

class Movies extends React.Component {
	constructor(props) {
		super(props);

		this.cancelToken = axios.CancelToken.source();
	}

	/**
	 * Sends a request for titles if not in store
	 * @memberof Movies
	 */
	componentDidMount() {
		const {
			getSeries,
			titles,
		} = this.props;

		if (titles.length > 0) {
			return "content available";
		}

		getSeries(
			this.cancelToken.token
		);
	}

	/**
	 * Cancels getSeries HTTP request
	 * @memberof Movies
	 */
	componentWillUnmount() {
		const {
			error,
			spinner,
			setError,
			setSpinner,
		} = this.props;

		this.cancelToken.cancel();
		
		if (spinner) {
			setSpinner(
				false
			);
		}

		if (error) {
			setError(
				"Oops, something went wrong..."
			);
		}
	}

	/**
	 * Creates a title
	 * @property {Array} titles
	 * @returns {Array}
	 * @memberof Movies
	 */
	renderTitle(titles) {
		return titles.map((series, index) => 
			<div
				styleName="poster" 
				key={`${index}`}>
				<img 
					src={series.images["Poster Art"].url} />
					
				<p>{series.title}</p>
			</div>
		);
	}
	
	/**
	 * Groups movies in a row of 7
	 * @returns {Array}
	 * @memberof Movies
	 */
	groupMovies() {
		const {
			titles,
		} = this.props;
		
		return _.inGroupsOf(titles, 7)
            .map((elem, index) => {
				return <div
					styleName="title_wrapper"
					key={index}>

					{this.renderTitle(elem)}
				</div>
		    });
	}

	render() {
		const {
			spinner,
			error,
		} = this.props;

		let content = (spinner) ?
			"Loading..." : this.groupMovies();
		content = (error) ?
			error : content;

		return <React.Fragment>
			<Title>
				<h1 
					className="container">
					Popular Series
				</h1>
			</Title>
			<div className="container">
				{content}
			</div>
		</React.Fragment>;
	}
}

export default Movies;