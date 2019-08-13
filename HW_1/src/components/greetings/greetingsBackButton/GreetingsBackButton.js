import React from "react";
import PropTypes from "prop-types";

import "./greetingsBackButton.css";

export default function GreetingsBackButton({ onPress }){
	return(
		<span 
			className="back-button"
			onClick={onPress}>←</span>);
}

GreetingsBackButton.propTypes = {
	onPress: PropTypes.func
}
