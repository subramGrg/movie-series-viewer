import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { withRouter } from 'react-router-dom';

import Movies from "./movies.component";
import * as moviesActions from "./movies.actions";
import { filterTitles } from "helpers";

const mapDispatchToProps = (dispath) => ({
    ...bindActionCreators({
        ...moviesActions,
    }, dispath),
});

const mapStateToProps = (store) => {
	const titles = filterTitles(
		store.titleReducer.series,
		"movie"
	);

    return {
		titles,
		spinner: store.titleReducer.spinner,
		error: store.titleReducer.error,
    };
};

export default withRouter(
	connect(mapStateToProps, mapDispatchToProps)(Movies)
);