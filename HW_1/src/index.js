import "./app.css";
import React from "react";
import ReactDOM from "react-dom";

import UserForm from "./components/userForm";
import Greetings from "./components/greetings";

ReactDOM.render(<UserForm formHeader={onSubmit}/>, document.getElementById("root"));

function onSubmit(dataS){
	ReactDOM.render(<Greetings data = {dataS} onBack = {onBackS}/>, document.getElementById("root"));

	function onBackS(){
		ReactDOM.render(<UserForm formHeader={onSubmit}/>, document.getElementById("root"));
	}
}