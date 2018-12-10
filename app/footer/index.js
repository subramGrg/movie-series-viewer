import React from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";

import Instagram from "assets/instagram.svg";
import Facebook from "assets/fb.svg";
import apple from "assets/apple.png";
import google from "assets/google.png";

import "./footer.scss";

const renderFooter = () => {
	return <div styleName="infinite">
		<div
			className="container">
			
			<div styleName="link_wrapper">
				<Link
					styleName="link" 
					to="/">

					Home
				</Link>

				<Link
					styleName="link" 
					to="#">
					
					Terms and condition
				</Link>

				<Link
					styleName="link" 
					to="#">
					
					Privacy Policy
				</Link>

				<Link
					styleName="link" 
					to="#">
					
					Collection Statement
				</Link>

				<Link
					styleName="link" 
					to="#">
					
					Help
				</Link>

				<Link
					styleName="link" 
					to="#">
					
					Manage Account
				</Link>
			</div>

			<div styleName="copyright">
				Copyright {new Date().getFullYear()} DEMO Streaming. All Rights Reserved.
			</div>

			<div styleName="bottom_wrapper">
				<div styleName="icon_wrapper">
					<span>
						<Instagram />
					</span>
					<span>
						<Facebook />
					</span>
				</div>

				<div styleName="logo_wrapper">
					<img src={apple} />
					
					<img src={google} />
				</div>
			</div>
		</div>
	</div>;
};

const Footer = () => (
	ReactDOM.createPortal(
		renderFooter(),
		document.getElementById("footer")
	)
);

export default Footer;