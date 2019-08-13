import React from "react";

import UserForm from "./components/userForm";
import Greetings from "./components/greetings";

export default class App extends React.Component{
	constructor(props){
		super(props);
		this.onSubmit = this.onSubmit.bind(this);
		this.onBack = this.onBack.bind(this);
		this.state = {isGrating: false};
	}

	onSubmit(data){
		this.setState({isGrating: true});
		this.data = data;
	}

	onBack(){
		this.setState({isGrating: false});
	}
	
	render(){
		const isGrating = this.state.isGrating;
		let component = null;

		if(isGrating){
			component = <Greetings data={this.data} onBack={this.onBack}/>;
		}
		else{
			component = <UserForm formHeader={this.onSubmit}/>;
		}
		return <div>{component}</div>;
	}
}

