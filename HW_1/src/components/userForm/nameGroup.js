import React from "react";

function NameInput(props){
	return (
		<input
			type="text"
			className="form-control"
			id="name"
			placeholder="Name"
		/>);
}

function NameLabel(){
	return (
		<label forhtml="name">What is your name?</label>
	);
}

export default function NameGroup(props){
	return (
		<div className="form-group">
			<NameLabel/>
			<NameInput value={props.value}/>
		</div>
	);
}