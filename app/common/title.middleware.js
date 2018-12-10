import axios from "axios";

import { 
	setSeries, 
	setSpinner, 
	setError 
} from "common/title.actions";

const middleware = ({ dispatch, }) => (next) => (action) => {
	if (action.type === "GET_SERIES") {
		// make HTTP request
		dispatch(
			setSpinner(true)
		);

		axios({
			url: "https://raw.githubusercontent.com/StreamCo/react-coding-challenge/master/feed/sample.json",
			method: "GET",
			cancelToken: action.payload,
		})
		.then(({ data }) => {
			dispatch(
				setSeries(data)
			);
			
			dispatch(
				setSpinner(false)
			);
		})
		.catch(error => {
			dispatch(
				setError(
					"Oops, something went wrong..."
				)
			);
		});
	}

	next(action);
};

export default middleware;