import React from "react";
import PropTypes from "prop-types";

import GreetingsLabel from "./GreetingsLabel";
import BackButton from "./greetingsBackButton";

export default function Greetings(props){
	return(
		<div>
			<BackButton onPress={props.onBack}/>
			<GreetingsLabel userData = {props.data}/>
		</div>
		);
}

Greetings.propTypes = {
	onBack: PropTypes.func,
	data: PropTypes.object
}