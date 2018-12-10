import React from "react";

import "./page-title.scss";

const Title = ({ children, }) => {
	return <div styleName="title__container">
		{children}
	</div>
};

export { Title };