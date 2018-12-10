import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { withRouter } from 'react-router-dom';

import Series from "./series.component";
import * as titleActions from "common/title.actions";
import { filterTitles } from "helpers";

const mapDispatchToProps = (dispath) => ({
    ...bindActionCreators({
        ...titleActions,
    }, dispath),
});

const mapStateToProps = (store) => {
	const titles = filterTitles(
		store.titleReducer.series,
		"series"
	);

    return {
		titles,
		spinner: store.titleReducer.spinner,
		error: store.titleReducer.error,
    };
};

export default withRouter(
	connect(mapStateToProps, mapDispatchToProps)(Series)
);