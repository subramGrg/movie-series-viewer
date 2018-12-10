const initialState = {
	series: [],
	spinner: false,
	error: null,
};

export default (state=initialState, action) => {
	switch (action.type) {
		case "SET_SERIES":
			return {
				...state,
				series: action.payload.entries,
			};

		case "SET_SPINNER":
			return {
				...state,
				spinner: action.payload,
			};

		case "SET_ERROR":
			return {
				...state,
				error: action.payload,
			};

		default:
			return state;
	}
}