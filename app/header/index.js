import React from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";

import "./header.scss";

const renderHeader = () => {
	return <div styleName="infinite">
		<div styleName="container" className="container">
			<h1 styleName="logo">
				<Link 
					to="/">
					DEMO Streaming
				</Link>
			</h1>

			<div styleName="primary_nav">
				<Link to="/log-in">
					Log In
				</Link>
				<Link 
					styleName="trial"
					to="/free-trial">

					Start your free trial
				</Link>
			</div>
		</div>
	</div>;
};

const Header = () => (
	ReactDOM.createPortal(
		renderHeader(),
		document.getElementById("header")
	)
);

export default Header;