import { applyMiddleware, createStore, combineReducers } from "redux";
import thunk from "redux-thunk";
import { createLogger } from "redux-logger";

import seriesMiddleware from "common/title.middleware";
import titleReducer from "common/title.reducer";

const middlewares = [seriesMiddleware];

if (process.env.NODE_ENV !== "production") {
    middlewares.push(
        createLogger({
            collapsed: true,
        })
    );
}

const reducers = combineReducers({
	titleReducer,
});

const store = createStore(reducers, applyMiddleware(thunk, ...middlewares));

export default store;