import React from "react";
import GreetingsLabel from "./greetingsLabel";
import BackButton from "./greetingsBackButton";

export default (props)=>{
	return(
		<div>
			<BackButton onPress={props.onBack}/>
			<GreetingsLabel data = {props.data}/>
		</div>
		);
}